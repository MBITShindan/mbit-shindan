import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";

export default async function RankingBox(props: {
    rank: number,
    type: MBTIType,
    ratio: number;
}) {
    const { rank, type, ratio } = props;

    return (
        <div className="flex items-center gap-5 text-3xl font-bold">
            <div className="w-15 text-nowrap">{rank}位</div>
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between w-full gap-2">
                <Image
                    src={`/mbti/${type}.png`}
                    alt={type}
                    width={24}
                    height={24}
                />
                <div className="flex-1">{diagnosisResults[type].name}</div>
                <div>{ratio}%</div>
            </div>
        </div>
    );
}
