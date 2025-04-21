import { MuiButton } from "../components/MuiButton"
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export default function TitlePage() {
    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    backgroundImage:  `url('/Pasuteru.png')` ,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <MuiButton 
                    sx={{
                    }}
                >
                    チュートリアル
                </MuiButton>
            </Box>
        </AppRouterCacheProvider>
    );
}
