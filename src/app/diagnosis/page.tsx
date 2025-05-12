import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export default function diagnosis() {
    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: "../public/home.png",
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
                <Box>
                    
                </Box>
            </Box>
        </AppRouterCacheProvider>
    );
}
