import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function TitlePage() {
    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: `url('${basePath}/Pasuteru.png')`,
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