import { MuiButton } from "../components/MuiButton";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HistoryIcon from '@mui/icons-material/History';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import Link from 'next/link';

export default function TitlePage() {
    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: "../public/pastel.png",
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
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "5rem",
                            marginLeft: "3rem"
                        }}
                    >
                        {/* M */}
                        <Box
                            sx={{
                                fontFamily: "Roboto",
                                fontStyle: "italic",
                                color: "white",
                                textShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
                            }}
                        >
                            M
                        </Box>

                        {/* B */}
                        <Box
                            sx={{
                                fontFamily: "Roboto",
                                fontStyle: "italic",
                                color: "white",
                                textShadow: "0 3px 10px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            B
                        </Box>

                        <Box sx={{ position: "relative", width: "50px" }}>
                            {/* IとTの影レイヤー 始まり*/}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    fontFamily: "Roboto",
                                    fontStyle: "italic",
                                    color: "black",
                                    textShadow: "0 3px 10px rgba(0, 0, 0, 0.4)",
                                    zIndex: 0,
                                }}
                            >
                                I
                            </Box>
                            {/* Iのグラデーションレイヤー */}
                            <Box
                                sx={{
                                    fontFamily: "Roboto",
                                    background: "linear-gradient(to bottom, #0033FF, #71F6FF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontStyle: "italic",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                I
                            </Box>
                        </Box>

                        <Box sx={{ position: "relative", width: "7rem", marginLeft: "-27px" }}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    fontFamily: "Roboto",
                                    fontStyle: "italic",
                                    color: "black",
                                    textShadow: "0 3px 3px rgba(0, 0, 0, 0.3)",
                                    zIndex: 0,
                                }}
                            >
                                T
                            </Box>
                            {/* Tグラデーションレイヤー */}
                            <Box
                                sx={{
                                    fontFamily: "Roboto",
                                    background: "linear-gradient(to bottom, #0033FF, #71F6FF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontStyle: "italic",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                T
                            </Box>
                        </Box>
                    </Box>
                    {/* 影レイヤー終わり */}

                    <Box
                        color="white"
                        sx={{
                            fontFamily: "BuildingsRailway",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "7.8rem",
                            textShadow: "0 3px 10px rgba(0, 0, 0, 0.3)",
                            lineHeight: "1",
                            mt: "-3rem"
                        }}
                    >
                        診断
                    </Box>
                </Box>

                <Box
                    color="white"
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textShadow: `
                            -0.3px -0.1px 0 black,
                            0.3px -0.1px 0 black,
                            0px 0.1px 0 black,
                            0px -0.1px 0 black
                        `
                    }}
                >
                    <Box 
                        sx={{ 
                            height: "2rem",
                            fontSize: "1.75rem",
                            fontWeight: "900"
                        }}
                    >
                        あなたの隠れた
                    </Box>
                    <Box
                        sx={{
                            height: "3rem",
                            fontSize: "1.75rem",
                            fontWeight: "900"
                        }}
                    >
                        <Box
                            component="span"
                            sx={{ 
                                fontSize: "2.5rem"
                            }}
                        >
                            性格タイプ
                        </Box>
                        が
                    </Box>
                    <Box
                        sx={{ 
                            height: "3rem",
                            fontSize: "1.75rem",
                            fontWeight: "900"
                        }}
                    >
                        わかるゲーム！
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1rem"
                    }}
                >
                    <MuiButton
                        sx={{
                            width: "17rem",
                            height: "4rem",
                            fontSize: "1.6rem"
                        }}
                    >
                        <PlayCircleOutlineIcon sx={{ fontSize: "3.1rem" }} />
                        チュートリアル
                    </MuiButton>
                    <Link href="diagnosis">
                        <MuiButton
                            sx={{
                                background: "linear-gradient(to bottom, #0033FF, #71F6FF)",
                                width: "12.5rem",
                                height: "4rem",
                                fontSize: "1.6rem"
                            }}
                        >
                            <PersonSearchIcon sx={{ fontSize: "3.1rem" }} />
                            性格診断
                        </MuiButton>
                    </Link>
                    <MuiButton
                        sx={{
                            width: "17rem",
                            height: "4rem",
                            fontSize: "1.6rem"
                        }}
                    >
                        <HistoryIcon sx={{ fontSize: "3.1rem" }} />
                        前回の診断結果
                    </MuiButton>
                    <MuiButton
                        sx={{
                            width: "17rem",
                            height: "4rem",
                            fontSize: "1.6rem"
                        }}
                    >
                        <StackedBarChartIcon sx={{ fontSize: "3.1rem" }} />
                        診断ランキング
                    </MuiButton>
                </Box>
            </Box>
        </AppRouterCacheProvider>
    );
}
