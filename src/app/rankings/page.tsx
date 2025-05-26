import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ENDPOINTS } from "../../lib/constants";

export default async function RankingPage() {
    const res = await fetch(`${ENDPOINTS.rankings}`, {
        // cache: 'no-store',
    });
    const data = await res.json();

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
                {JSON.stringify(data, null, 2)}
            </Box>
        </AppRouterCacheProvider>
    );
}
