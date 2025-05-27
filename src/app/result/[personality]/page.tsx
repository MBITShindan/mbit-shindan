import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import Diagnosis from "../../../components/Personality";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from "@mui/material";
import { MuiButton } from "@/components/MuiButton";
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReplayIcon from '@mui/icons-material/Replay';

type PageProps = {
  params: {
    personality: MBTIType;
  };
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export async function generateStaticParams() {
  return Object.keys(diagnosisResults).map((type) => ({
    personality: type,
  }));
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
            overflowY: "auto",
            position: "relative",
            backgroundImage: `url('${basePath}/resultBG.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "10rem",
          }}
        >
          {/* 診断結果を中央に表示 */}
          <Box
            sx={{
              mt: "2rem",
              maxWidth: "1000vw",
              width: "95%",
              height:"50svh",
              position: "fixed",
              left: "50%",
              transform: "translateX(-50%)",
              justifyContent: "center",
            }}
          >
            <Diagnosis personality={personality} />
          </Box>

          {/* 固定フッターボタン */}
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
          </Box>
        </Box>
      </AppRouterCacheProvider>
    </div>
  );
}