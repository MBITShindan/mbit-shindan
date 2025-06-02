import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import Diagnosis from "../../../components/Personality";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from "@mui/material";
import { MuiButton } from "@/components/MuiButton";
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReplayIcon from '@mui/icons-material/Replay';
import { Metadata } from "next";
import Link from "next/link";

type PageProps = {
  params: {
    personality: MBTIType;
  };
};

export async function generateStaticParams() {
  return Object.keys(diagnosisResults).map((type) => ({
    personality: type,
  }));
}

export async function generateMetadata({ params }: { params: { personality: string } }): Promise<Metadata> {
  const mbit: string = diagnosisResults[params.personality as MBTIType].name;
  return {
    title: `MBIT診断 | ${mbit}`,
  };
}

export default function Page({ params }: PageProps) {
  const { personality } = params;
  return (
    <div>
      <AppRouterCacheProvider>
        <Box
          sx={{
            width: "100vw",
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url('/pastel2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
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
        </Box>
      </AppRouterCacheProvider>
    </div>
  );
}
