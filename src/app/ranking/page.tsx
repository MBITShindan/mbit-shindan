import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { cookies } from "next/headers";

export default async function RankingPage() {
    const cookieStore = await cookies();

    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: "url('pastel2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    gap: "1rem",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pb: "2rem",
                }}
            >
            </Box>
        </AppRouterCacheProvider>
    );
}
