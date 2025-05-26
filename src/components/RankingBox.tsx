import { Box } from "@mui/material";
import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";

export default async function RankingBox(props: {
    rank: number,
    type: MBTIType,
    ratio: number;
}) {
    const { rank, type, ratio } = props;

    // TODO: グリッドボックス
    return (
        <Box className="flex items-center justify-center text-3xl font-bold gap-4">
            <Box>{rank}位</Box>
            <Box
                className={`
                    bg-white
                    rounded-lg shadow-md max-w-md p-2
                    flex items-center flex-grow gap-2 justify-between
                `}
            >
                <Image
                    src={`/mbti/${type}.png`}
                    alt={type}
                    width={20}
                    height={20}
                />
                <Box>{diagnosisResults[type].name}</Box>
                <Box>{ratio}%</Box>
            </Box>
        </Box>
    );
}
