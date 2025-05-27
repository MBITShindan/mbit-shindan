import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";

export default async function RankingBox(props: {
    rank: number,
    type: MBTIType,
    ratio: number;
}) {
    const { rank, type, ratio } = props;

    // 診断結果のテーマカラーを取得する関数
    function getTypeColor(mbtiType: string = type): string{
        let result = "bg-white";
        if(type.includes("N")){
            if(type.includes("T")){ // 分析家タイプ(N+T)
                result = "bg-[#DFB3EF]"; // 紫色
            }else{ // 外交官タイプ(N+F)
                result = "bg-[#D2F1B4]"; // 緑色
            }
        }else if(type.includes("S")){
            if(type.includes("J")){ // 番人タイプ(S+J)
                result = "bg-[#B4E7F1]"; // 青色
            }else{ // 探検家タイプ(S+P)
                result = "bg-[#F1E7B4]"; // 黄色
            }
        }
        return result;
    }

    return (
        <div className="flex items-center gap-5 text-3xl font-bold">
            <div className="w-15 text-nowrap">{rank}位</div>
            <div className={getTypeColor() + " rounded-lg shadow-md p-2 flex items-center justify-between w-full gap-2"}>
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
