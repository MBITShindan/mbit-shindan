import { MBTIType, diagnosisResults } from "../../../diagnosisResults";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from "@mui/material";
import { Metadata } from "next";
import PersonalityResult from "../../../components/PersonalityResult";

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
  return (
    <div>
      <AppRouterCacheProvider>
        <Box
          sx={{
            width: "100vw",
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url('/pastel2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <PersonalityResult personality={personality}/>
        </Box>
      </AppRouterCacheProvider>
    </div>
  );
}
