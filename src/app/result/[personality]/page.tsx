import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: { personality: string } }): Promise<Metadata> {
  const mbit: string = diagnosisResults[params.personality as MBTIType].name;
  return {
    title: `MBIT診断 | ${mbit}`,
  };
}

export default function Page({ params }: PageProps) {
  const { personality } = params;
  const result = diagnosisResults[personality];

  if (!result) return null;

  return <DiagnosisClient personality={personality} />;
}
