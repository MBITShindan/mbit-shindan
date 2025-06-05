import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import { Metadata } from "next";
import DiagnosisClient from "./DiagnosisClient";

type PageProps = {
  params: Promise<{ personality: MBTIType }>;
};

export async function generateStaticParams(): Promise<{ personality: MBTIType }[]> {
  return Object.keys(diagnosisResults).map((type) => ({
    personality: type as MBTIType,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { personality } = params;
  const mbit = diagnosisResults[personality].name;
  return {
    title: `MBTI診断 | ${mbit}`,
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { personality } = params;
  const result = diagnosisResults[personality];

  if (!result) return null;

  return <DiagnosisClient personality={personality} />;
}