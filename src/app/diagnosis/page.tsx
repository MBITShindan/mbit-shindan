import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import QuestionObjects from "@/components/QuestionObjects";

export default function diagnosis() {
    return (
        <AppRouterCacheProvider>
            <Box
                sx={{
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    position: "fixed",
                    backgroundImage: "url('/home.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{ 
                        display: "flex", 
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        position: "relative",
                        width: "100vw",
                        height: "6.875rem",
                        color: "white"
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            fontSize: "4.75rem",
                            mt: "-1rem",
                            width: "5rem",
                            textShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                    ／
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            fontSize: "3.5rem",
                            mt: "-1rem",
                            mr: "3.5rem",
                            textShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
                        }}>
                    10
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            fontSize: "2.375rem",
                            mt: "1.8rem",
                            ml: "3rem",
                            textShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                    10
                    </Box>
                </Box>
                <QuestionObjects/>
            </Box>
        </AppRouterCacheProvider>
    );
}
