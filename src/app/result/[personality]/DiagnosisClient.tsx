"use client";

import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import Diagnosis from "../../../components/Diagnosis";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from "@mui/material";
import { MuiButton } from "@/components/MuiButton";
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";
import { APP_BASE_URL } from "../../../lib/constants";
import { ReplayOutlined } from "@mui/icons-material";

export default function DiagnosisClient({ personality }: { personality: MBTIType }) {
  const result = diagnosisResults[personality];
  const [imageGenerating, setImageGenerating] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  function shareResult() {
    // TODO: ポップアップからurlコピー, twitter, lineを選べるようにする
    shareToTwitter();
  }


  function shareToTwitter() {
    const text = `診断結果は「${result?.name}」タイプでした！ みんなもやってみてね！\n#MBTI #性格診断\n${APP_BASE_URL}`;
    const twitterShareUrl = `https://twitter.com/share?` +
      `&text=${encodeURIComponent(text)}`;
    window.open(twitterShareUrl, "_blank", "noopener,noreferrer");
  }

  async function saveAsImage () {
    if (!resultRef.current) return;
    setImageGenerating(true);

    const buttons = document.querySelector("#actionButtons") as HTMLElement | null;
    if (buttons) buttons.style.display = "none";
    await new Promise((res) => setTimeout(res, 500)); // 待機時間を少し増やす

    // スクショ用に一時的にスタイルを適用する
    resultRef.current.style.backgroundImage = "url('/pastel2.png')";

    const canvas = await html2canvas(resultRef.current!, {
      useCORS: true, // ★ ここが追加された箇所
    });

    const link = document.createElement("a");
    link.download = "診断結果.png";
    link.href = canvas.toDataURL();
    link.click();

    if (buttons) buttons.style.display = "flex";
    setImageGenerating(false);

    // スクショ用に一時的に適用したスタイルを除去する
    resultRef.current.style.backgroundImage = "";
  };

  return (
    <AppRouterCacheProvider>
      <Box
        className="bg-[url('/pastel2.png')] "
        sx={{
          p: 2,
          width: "100vw",
          height: "100dvh",
          display: "flex",
          gap: 2,
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            maxWidth: "25rem",
            margin: "0 auto",
            padding: "0 1rem",
            backgroundSize: "100% auto"
          }}
          ref={resultRef}
        >
          <Diagnosis personality={personality}/>
        </Box>
        <Box
          id="actionButtons"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <MuiButton
              onClick={shareResult}
              disabled={imageGenerating}
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
              onClick={saveAsImage}
              disabled={imageGenerating}
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
                  name="home"
                  sx={{ fontSize: "1.6rem" }}
              >
                  <ReplayOutlined sx={{ fontSize: "3.1rem" }} />
                  タイトルに戻る
              </MuiButton>
          </Link>
        </Box>
      </Box>
    </AppRouterCacheProvider>
  );
}
