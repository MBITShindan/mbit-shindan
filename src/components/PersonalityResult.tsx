"use client";
import Diagnosis from "./Personality";
import { Box } from "@mui/material";
import { MuiButton } from "@/components/MuiButton";
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReplayIcon from '@mui/icons-material/Replay';
import Link from "next/link";
import domtoimage from 'dom-to-image-more';
import { MBTIType } from "../diagnosisResults";
import { useRef } from "react";

export default function PersonalityResult(props: {personality: MBTIType}) {
    const personality = props.personality;
    const resultAreaRef = useRef<HTMLDivElement>(null);

    async function saveImage() {
        if (!resultAreaRef.current) return;

        const node = resultAreaRef.current;

        // スクロールバーを非表示に
        const originalOverflow = node.style.overflow;
        node.style.overflow = "hidden";

        // クローン作成して全体をキャプチャ
        const clone = node.cloneNode(true) as HTMLElement;
        const width = node.scrollWidth;
        const height = node.scrollHeight;

        clone.style.width = `${width}px`;
        clone.style.height = `${height}px`;
        clone.style.overflow = "visible";

        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.top = "-9999px";
        container.style.left = "-9999px";
        container.appendChild(clone);
        document.body.appendChild(container);

        try {
            const dataUrl = await domtoimage.toPng(clone, {
                width,
                height,
                style: {
                    overflow: "visible",
                },
            });

            const link = document.createElement("a");
            link.download = `${personality}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("画像の保存に失敗しました:", err);
        } finally {
            document.body.removeChild(container);
            node.style.overflow = originalOverflow;
        }
    }

    return (
        <>
            <Box
                ref={resultAreaRef}
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "2rem 0 12rem", // 下部ボタンのために余白を追加
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Diagnosis personality={personality} />
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    zIndex: 10,
                }}
            >
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <MuiButton
                        sx={{
                            background: "linear-gradient(to bottom, #42A5F5)",
                            width: "7.5rem",
                            height: "3rem",
                            fontSize: "1.9rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <ShareIcon sx={{ fontSize: "3rem", mr: 0.5 }} />
                        共有
                    </MuiButton>
                    <MuiButton
                        onClick={saveImage}
                        sx={{
                            background: "linear-gradient(#66BB6A)",
                            width: "7.5rem",
                            height: "3rem",
                            fontSize: "1.9rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <SaveAltIcon sx={{ fontSize: "3rem", mr: 0.5 }} />
                        保存
                    </MuiButton>
                </Box>
                <Link href="/">
                    <MuiButton
                        sx={{
                            width: "17rem",
                            height: "3.3rem",
                            fontSize: "1.9rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <ReplayIcon sx={{ fontSize: "3.1rem", mr: 0.5 }} />
                        タイトルに戻る
                    </MuiButton>
                </Link>
            </Box>
        </>
    );
}
