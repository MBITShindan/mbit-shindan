"use client";

import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";
import { useEffect, useState } from "react";
import Diversity1Icon from '@mui/icons-material/Diversity1Outlined';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircleOutlined';
import FlatwareIcon from '@mui/icons-material/FlatwareOutlined';
import DiagnosisAisyou from "./DiagnosisAisyou";
import { ENDPOINTS } from "../lib/constants";

const matchBgColors = ["#FDECC8", "#F9E0DC", "#E2ECF7"];

type Props = {
  personality: MBTIType;
};

//レスポンスデータ
interface Compatibility {
  type: string;
  percentage: number;
}

interface CompatibilityData {
  baseType: string;
  compatibilities: Compatibility[];
}

export default function Diagnosis({ personality }: Props) {
    const result = diagnosisResults[personality];
    const [goodTypes, setGoodTypes] = useState<CompatibilityData>();
    //その他の値
    const [other, setOther] = useState<number>(0);

    useEffect(() => {
      const fetchGoodTypes = async () => {
        try {
          const res = await fetch(`${ENDPOINTS.compatibility}?personalityType=${personality}`);
          if (!res.ok) {
            console.error("Fetch failed with status:", res.status)
            return;
          }

          const json: CompatibilityData = await res.json();
          setGoodTypes(json);

          // other の計算と状態更新
          const total = json.compatibilities.reduce((sum, c) => sum + c.percentage, 0);
          setOther(100 - total);

        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
      fetchGoodTypes();
    }, [personality]);

  if (!result) return <p>診断結果が見つかりません。</p>;

  return (
    <div style={{ padding: "0.5rem", textAlign: "center", color: "#3C4F69", fontWeight: 600 }}>
      <h1 style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>
        あなたは <span style={{ fontSize: "1.9rem" }}>{result.name}</span> タイプ！
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
        <Image
          src={result.image.replace("../public", "")}
          alt={`${result.name}の画像`}
          width={80}
          height={100}
          unoptimized
          style={{ marginBottom: "1.5rem" }}
        />
        <p style={{ fontSize: "1.125rem", color: "#666", marginTop: "-1rem" }}>
          タイプ<br />【{result.type}】
        </p>
      </div>

      <div style={{ textAlign: "left", marginTop: "-1rem", marginBottom: "-0.5rem" }}>
        <div style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
          <PersonPinCircleIcon style={{ marginRight: "0.5rem" }} />
          性格説明
        </div>
        <p style={{ fontSize: "0.875rem" }}>{result.description[0]}</p>
        <p style={{ fontSize: "0.875rem" }}>{result.description[1]}</p>
      </div>

      <div style={{ textAlign: "left", marginTop: "0.5rem" }}>
        <div style={{ fontSize: "1.25rem", display: "flex", alignItems: "center" }}>
          <Diversity1Icon style={{ marginRight: "0.5rem" }} />
          相性のいいタイプは…
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
        {goodTypes && (
          <>
            {goodTypes.compatibilities.map((match, index: number) => (
              <DiagnosisAisyou
                key={index}
                name={match.type}
                rate={`${match.percentage}%`}
                image={`/mbti/${match.type}.png`}
                color={matchBgColors[index % matchBgColors.length]}
                icon = {false}
              />
            ))}
            {other != 0 && (
              <DiagnosisAisyou
                name={"その他"}
                rate={`${other}%`}
                image={"<MoreHorizIcon>"} // 実際のアイコン画像 or アイコンコンポーネントに置換
                color={"#DFE4EA"}
                icon = {true}
              />
            )}
          </>
        )}
        </div>
      </div>

      <div style={{ textAlign: "left", marginTop: "1rem" }}>
        <div style={{ fontSize: "1.25rem", display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
          <FlatwareIcon style={{ marginRight: "0.5rem" }} />
          おすすめ屋台グルメ！
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <p style={{ fontSize: "0.875rem", marginTop: "-1.25rem" }}>
            {result.recommendedFoods.description[0]}
            <br />
            {result.recommendedFoods.description[1]}
          </p>
          <Image
            src={result.recommendedFoods.image.replace("../public", "")}
            alt={`${result.recommendedFoods.name}の画像`}
            width={120}
            height={120}
            unoptimized
            style={{ borderRadius: "0.5rem", marginTop: "-0.5rem" }}
          />
        </div>
      </div>
    </div>
  );
}