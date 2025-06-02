"use client";

import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import Diagnosis from "../../../components/Diagnosis";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from "@mui/material";
import { MuiButton } from "@/components/MuiButton";
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReplayIcon from '@mui/icons-material/Replay';
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function DiagnosisClient({ personality }: { personality: MBTIType }) {
  const result = diagnosisResults[personality];
  const router = useRouter();
  const [imageGenerating, setImageGenerating] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const shareResult = () => {
    const text = `診断結果は「${result?.name}」タイプでした！\n`;
    const url = window.location.href;
    const shareData = {
      text,
      url,
    };
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

const saveAsImage = async () => {
  if (!resultRef.current) return;
  setImageGenerating(true);

const buttons = document.querySelector("#actionButtons") as HTMLElement | null;
if (buttons) buttons.style.display = "none";


  await new Promise((res) => setTimeout(res, 500)); // 待機時間を少し増やす

  const canvas = await html2canvas(resultRef.current!, {
    useCORS: true, // ★ ここが追加された箇所
  });

  const link = document.createElement("a");
  link.download = "診断結果.png";
  link.href = canvas.toDataURL();
  link.click();

  if (buttons) buttons.style.display = "flex";
  setImageGenerating(false);
};


  const returnToTitle = () => {
    localStorage.removeItem("answers");
    localStorage.removeItem("parameters");
    router.push("/");
  };

  return (
    <AppRouterCacheProvider>
      <Box
        sx={{
          p: 2,
          width: "100vw",
          height: "100dvh",
          display: "flex",
          gap: 2,
          flexDirection: "column",
          backgroundImage: `url('../pastel2.png')`,
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
          }}
          ref={resultRef}
        >
          <Diagnosis personality={personality} />
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
          <MuiButton
            onClick={returnToTitle}
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
        </Box>
      </Box>
    </AppRouterCacheProvider>
  );
}
