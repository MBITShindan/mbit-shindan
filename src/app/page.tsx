import { MuiButton } from "../components/MuiButton";
import { ResultPageButton } from "../components/ResultPageButton";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HistoryIcon from '@mui/icons-material/History';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import Link from 'next/link';
import { cookies } from "next/headers";
import { MBTIType } from "../diagnosisResults";
import { ENDPOINTS } from "../lib/constants";

export default async function TitlePage() {
    const cookieStore = await cookies();
    const personalityResult: MBTIType | undefined = cookieStore.get("personalityResult")?.value as MBTIType | undefined; // Cookieから診断結果を取得

    const userId = cookieStore.get("userId")?.value; // CookieからユーザーIDを取得

    // 診断結果のステータスを確認
    async function checkStatus(id: string): Promise<boolean> {
        try {
            const res = await fetch(`${ENDPOINTS.results}?userId=${id}`, { cache: "no-store" });
            if (!res.ok) return false;
            const data = await res.json();
            return typeof data.resultJudge !== "undefined";
        } catch (error) {
            console.error("診断結果確認エラー:", error);
        return false;
        }
    }

    // ユーザーIDを登録
    async function registerUserId(id: string) {
        try {
            const response = await fetch(ENDPOINTS.user.creation, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: id }),
                cache: "no-store"
            });

            const result = await response.json();
            if (!response.ok) {
                console.error("登録失敗:", result.message || result);
            } else {
                console.log("登録成功:", result.message);
            }
        } catch (error) {
            console.error("ユーザーID登録エラー:", error);
        }
    }

    // ユーザーIDが存在する場合、診断結果のステータスを確認し、登録されていなければ登録
    if (userId) {
        const hasResult = await checkStatus(userId);
        if (!hasResult) {
            await registerUserId(userId);
        }
    }

    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: "url('pastel.png')",
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
                    <Link href="tutorial">
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
                    </Link>
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
                    {/* {userId && <ResultPageButton userId={userId} />} */}
                    <Link href={`result/${personalityResult || ""}`}>
                        <MuiButton
                            disabled={!personalityResult}
                            name="result"
                            sx={{
                                width: "17rem",
                                height: "4rem",
                                fontSize: "1.6rem"
                            }}
                        >
                            <HistoryIcon sx={{ fontSize: "3.1rem" }} />
                            前回の診断結果
                        </MuiButton>
                    </Link>
                    <Link href="rankings">
                        <MuiButton
                            name="ranking"
                            sx={{
                                width: "17rem",
                                height: "4rem",
                                fontSize: "1.6rem"
                            }}
                        >
                            <StackedBarChartIcon sx={{ fontSize: "3.1rem" }} />
                            診断ランキング
                        </MuiButton>
                    </Link>
                </Box>
            </Box>
        </AppRouterCacheProvider>
    );
}
