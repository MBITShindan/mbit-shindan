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
  <EmojiEventsIcon/>,
  <WorkspacePremiumIcon/>,
  <MilitaryTechIcon/>
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
    <div className="max-h-[90vh] overflow-y-auto">
    <div className="p-2 mx-auto max-w-sm text-center text-[#3C4F69] font-semibold">
      {/* タイトル */}
      <h1 className="text-2xl mb-1">
        あなたは <span className="text-4xl">{result.name}</span> タイプ！
      </h1>

      {/* キャラクター画像 */}
      <div className="flex items-start mt-4 ml-35 -gap-4">
      <Image
        src={result.image.replace("../public", "")}
        alt={`${result.name}の画像`}
        width={100}
        height={100}
        className="mx-auto mb-2 -mt-3 w-[100] h-[140]"
      />
      <p className="text-lg text-gray-600 mt-17 mr-20 mb-17">タイプ<br></br>【{result.type}】</p>
      </div>

      {/* 性格説明 */}
      <div className="text-left -mt-17 -mb-1">
        <div className="text-xl flex items-center mb-1">
          <PersonPinCircleIcon className="mr-1" />
          性格説明
        </div>
        <p className="text-sm">{result.description[0]}</p>
        <p className="text-sm">{result.description[1]}</p>
      </div>

      {/* 相性の良いタイプ */}
      <div className="text-left mt-2 -mb-2">
        <div className="text-xl flex items-center text-base">
          <Diversity1Icon className="mr-1" />
          相性のいいタイプは…
        </div>
        <div className="grid grid-cols-2 gap-2">
          {result.goodMatches.map((match, index) => (
            <div key={index}
            className="flex items-center justify-between px-5 py-2 rounded-xl shadow text-sm bg-opacity-80"
            style={{ backgroundColor: matchBgColors[index] || "#f0f0f0" }}
            >
              <span className="flex items-center gap-2">
                {matchIcons[index]}
                {diagnosisResults[match as MBTIType]?.name ?? match}
              </span>
              <span className="text-gray-700">
                {[13, 7, 20][index] || 10}%
              </span>
            </div>
          ))}
          {/* その他 */}
          <div className="flex items-center justify-between px-5 py-2 rounded-xl shadow text-sm bg-opacity-80"
          style={{ backgroundColor: "#DFE4EA" }}
          >
            <span className="flex items-center gap-1">
              <MoreHorizIcon/>
              その他
            </span>
            <span className="text-gray-700">
              {
                100 -
                ([13, 7, 20]
                  .slice(0, result.goodMatches.length)
                  .reduce((acc, val) => acc + val, 0))
              }%
            </span>
          </div>
        </div>
      </div>

      {/* 食べ物のおすすめ */}
      <div className="text-left mt-4">
        <div className="text-xl flex items-center mb-1">
          <FlatwareIcon className="mr-1" />
          おすすめ屋台グルメ！
        </div>
        <div className="flex items-start mt-4 gap-4">
          <p className="text-sm -mt-5">{result.recommendedFoods.description[0]}<br></br>{result.recommendedFoods.description[1]}</p>
        <Image
          src={result.recommendedFoods.image.replace("../public", "")}
          alt={`${result.recommendedFoods.name}の画像`}
          width={120}
          height={120}
          className="rounded-lg mx-auto -mt-5 w-auto h-auto"
        />
        </div>
      </div>
    </div>
    </div>
  );
}