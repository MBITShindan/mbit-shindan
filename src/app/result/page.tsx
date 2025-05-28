import { MuiButton } from "@/components/MuiButton";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReplayIcon from '@mui/icons-material/Replay';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Page({ params }: { params: { personality: string } }) {
      console.log("クエリパラメータ type: <strong>"+'params.personality'+"</strong>")
  return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: `url('${basePath}/resultBG.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    gap: "1rem",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pb: "2rem",
                }}
            >
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
                        gap: "1rem"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "col",
                            gap: "1rem"
                        }}
                    >
                        <MuiButton
                            sx={{
                                background: "linear-gradient(to bottom, #42A5F5)",
                                width: "7.5rem",
                                height: "3rem",
                                fontSize: "1.9rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                whiteSpace: "nowrap"
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
                            whiteSpace: "nowrap"
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
                            whiteSpace: "nowrap"
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

// export default page;