import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import DiagnosisClient from "./DiagnosisClient";

type PageProps = {
  params: {
    personality: MBTIType;
  };
};

export async function generateStaticParams() {
  return Object.keys(diagnosisResults).map((type) => ({
    personality: type,
  }));
}

export default function Page({ params }: PageProps) {
  const { personality } = params;
  const result = diagnosisResults[personality];

  if (!result) return null;

  return <DiagnosisClient personality={personality} />;
}