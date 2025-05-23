import Image from "next/image";
import { diagnosisResults, MBTIType } from "../diagnosisResults";

type Props = {
  personality: MBTIType;
};

export default function Diagnosis({ personality }: Props) {
  const result = diagnosisResults[personality];

  if (!result) {
    return <p>診断結果が見つかりません。</p>;
  }

  return (
    <div className="p-4 text-center mx-auto max-w-md">
      {/* キャラクター画像と名前 */}
      <Image
        src={result.image.replace("../public", "")}
        alt={`${result.name}の画像`}
        width={100}
        height={100}
        className="mx-auto"
      />
      <h1 className="text-2xl font-bold mt-2">
        あなたは <span className="text-green-700">{result.name}</span> タイプ！
      </h1>
      <p className="text-sm text-gray-600">タイプ [{result.type}]</p>

      {/* 性格説明 */}
      <div className="text-left mt-4">
        <h2 className="text-lg font-bold mb-1">性格説明</h2>
        <p className="mb-1">{result.description[0]}</p>
        <p>{result.description[1]}</p>
      </div>

      {/* 相性の良いタイプ */}
      <div className="text-left mt-4">
        <h2 className="text-lg font-bold mb-1">相性の良いタイプ</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {result.goodMatches.map((match) => (
            <li key={match}>{match}</li>
          ))}
        </ul>
      </div>

      {/* おすすめの食べ物 */}
      <div className="text-left mt-4">
        <h2 className="text-lg font-bold mb-1">おすすめ屋台グルメ！</h2>
        <Image
          src={result.recommendedFoods.image.replace("../public", "")}
          alt={`${result.recommendedFoods.name}の画像`}
          width={300}
          height={200}
          className="rounded-lg mx-auto"
        />
        <p className="mt-1">{result.recommendedFoods.description[0]}</p>
        <p>{result.recommendedFoods.description[1]}</p>
      </div>
    </div>
  );
}