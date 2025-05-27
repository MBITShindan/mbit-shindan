import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import FlatwareIcon from '@mui/icons-material/Flatware';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const matchIcons = [
  <EmojiEventsIcon />,
  <WorkspacePremiumIcon />,
  <MilitaryTechIcon />
];
const matchBgColors = ["#FDECC8", "#F9E0DC", "#E2ECF7"];

type Props = {
  personality: MBTIType;
};

export default function Diagnosis({ personality }: Props) {
  const result = diagnosisResults[personality];

  if (!result) {
    return <p>診断結果が見つかりません。</p>;
  }

  return (
    <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
      <div
        style={{
          padding: "0.5rem",
          margin: "0 auto",
          maxWidth: "350px",
          textAlign: "center",
          color: "#3C4F69",
          fontWeight: 600,
        }}
      >
        {/* タイトル */}
        <h1 style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>
          あなたは{" "}
          <span style={{ fontSize: "1.9rem" }}>{result.name}</span>{" "}
          タイプ！
        </h1>

        {/* キャラクター画像 */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.5rem", marginLeft: "10rem" }}>
          <Image
            src={result.image.replace("../public", "")}
            alt={`${result.name}の画像`}
            width={100}
            height={140}
            style={{
              marginBottom: "1.5rem",
              marginTop: "-0.75rem",
            }}
          />
          <p style={{ fontSize: "1.125rem", color: "#666", marginTop: "-1rem", marginRight: "5rem" }}>
            タイプ<br />【{result.type}】
          </p>
        </div>

        {/* 性格説明 */}
        <div style={{ textAlign: "left", marginTop: "-1rem", marginBottom: "-0.5rem" }}>
          <div style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <PersonPinCircleIcon style={{ fontSize: "1.8rem", marginRight: "0.5rem" }} />
            性格説明
          </div>
          <p style={{ fontSize: "0.875rem" }}>{result.description[0]}</p>
          <p style={{ fontSize: "0.875rem" }}>{result.description[1]}</p>
        </div>

        {/* 相性の良いタイプ */}
        <div style={{ textAlign: "left", marginTop: "0.5rem", marginBottom: "-0.5rem" }}>
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
            {result.goodMatches.map((match, index) => (
              <div
                key={match}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  fontSize: "0.875rem",
                  backgroundColor: matchBgColors[index] || "#3C4F69",
                  opacity: 0.8,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {matchIcons[index]}
                  {diagnosisResults[match as MBTIType]?.name ?? match}
                </span>
                <span style={{ color: "#3C4F69" }}>
                  {[13, 7, 20][index] || 10}%
                </span>
              </div>
            ))}
            {/* その他 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                fontSize: "0.875rem",
                backgroundColor: "#DFE4EA",
                opacity: 0.8,
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <MoreHorizIcon />
                その他
              </span>
              <span style={{ color: "#555" }}>
                {
                  100 - [13, 7, 20]
                    .slice(0, result.goodMatches.length)
                    .reduce((acc, val) => acc + val, 0)
                }%
              </span>
            </div>
          </div>
        </div>

        {/* 食べ物のおすすめ */}
        <div style={{ textAlign: "left", marginTop: "1rem" }}>
          <div style={{ fontSize: "1.25rem", display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <FlatwareIcon style={{ marginRight: "0.5rem" }} />
            おすすめ屋台グルメ！
          </div>
          <div style={{ display: "flex", alignItems: "start", gap: "1rem", marginTop: "1rem" }}>
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
              style={{
                borderRadius: "0.5rem",
                marginTop: "-1.25rem",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}