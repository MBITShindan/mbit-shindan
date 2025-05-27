import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";
import { PersonRounded } from "@mui/icons-material";

export default async function RankingBox(props: {
    rank: number,
    type: MBTIType,
    ratio: number,
    isMyType: boolean
}) {
    const { rank, type, ratio, isMyType } = props;

    // 診断結果のテーマカラーを取得する関数
    function getTypeColor(mbtiType: string = type): string{
        let result = "bg-white";
        if(mbtiType.includes("N")){
            if(mbtiType.includes("T")){ // 分析家タイプ(N+T)
                result = "bg-[#DFB3EF]"; // 紫色
            }else{ // 外交官タイプ(N+F)
                result = "bg-[#D2F1B4]"; // 緑色
            }
        }else if(mbtiType.includes("S")){
            if(mbtiType.includes("J")){ // 番人タイプ(S+J)
                result = "bg-[#B4E7F1]"; // 青色
            }else{ // 探検家タイプ(S+P)
                result = "bg-[#F1E7B4]"; // 黄色
            }
        }
        return result;
    }

    return (
        <div className="flex items-center gap-5 text-3xl font-bold">
            <div className="relative w-15 h-full flex items-center text-nowrap">
                {(rank === 1) ? (
                    <Image
                        src={`/firstPlace.png`}
                        alt={`${rank}位`}
                        objectFit="contain"
                        fill
                        sizes="50px"
                    />
                ) : (
                    <div>{rank}位</div>
                )}
                {isMyType && (
                    <PersonRounded
                        sx={{fontSize: "4rem", color: "#FFC107"}}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
                    />
                )}
            </div>
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
