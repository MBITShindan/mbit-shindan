import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ENDPOINTS } from "../../lib/constants";
import { cookies } from "next/headers";
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import RankingBox from "../../components/RankingBox";
import { diagnosisResults, MBTIType } from "../../diagnosisResults";

type RankingData = {
    type: string;
    ratio: number;
}

export default async function RankingPage() {
    // ランキングデータを取得
    const res = await fetch(`${ENDPOINTS.rankings}`, {
        // cache: 'no-store',
    });
    const data: {data: RankingData[]} = await res.json();
    const rankings: RankingData[] = data.data;

    // 性格診断結果を取得
    const cookieStore = await cookies();
    // const personalityResult: MBTIType | undefined = cookieStore.get("personalityResult")?.value as MBTIType | undefined;
    const personalityResult: MBTIType | undefined = cookieStore.get("personalityResult")?.value as MBTIType | undefined || "ENFP";

    // 順位を取得する関数
    function getRankingPosition(type: MBTIType): number {
        return rankings.findIndex(ranking => ranking.type === type) + 1;
    }

    return (
        <AppRouterCacheProvider>
            <Box
                className="
                    w-screen h-[100dvh] 
                    overflow-hidden 
                    fixed 
                    bg-[url('/pastel2.png')] bg-cover bg-center bg-no-repeat 
                    flex flex-col gap-4 items-center justify-start 
                    text-[#3C4F69]
                    p-4
                "
            >
                <Box>
                    <span className="text-3xl font-bold flex items-center">
                        <StackedBarChartIcon sx={{fontSize: "2.5rem"}}/>
                        診断ランキング
                    </span>
                </Box>
                <Box className="flex flex-col gap-2 w-full flex-grow overflow-y-auto pr-2">
                    {rankings.map((rankingData, index) => (
                        <RankingBox
                            key={rankingData.type}
                            rank={index + 1}
                            type={rankingData.type as MBTIType}
                            ratio={rankingData.ratio}
                            isMyType={personalityResult === rankingData.type}
                        />
                    ))}
                </Box>
                {personalityResult && (
                    <Box className="text-3xl font-bold">
                        あなたのタイプ「{diagnosisResults[personalityResult].name}」は現在
                        <span className="text-4xl animate-breathe inline-block">{getRankingPosition(personalityResult)}位</span>
                        にランクイン中！
                    </Box>
                )}
            </Box>
        </AppRouterCacheProvider>
    );
}
