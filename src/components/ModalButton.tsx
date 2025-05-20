`use client`

import React from "react";
import { 
    Button, 
    Box,
} from "@mui/material";
import { questions } from "../mbtiQuestions"
import { Dispatch, SetStateAction } from "react";

type MainButtonProps = {
    selectedId: string | null
    setSelectedId: Dispatch<SetStateAction<string | null>>;
};

export const ModelButton = (props: MainButtonProps ) => {
    const {
        selectedId,
        setSelectedId
    } = props;
    return(
        <>
            {selectedId && (
                <Box
                    sx={{
                    position: 'fixed',
                    display: 'flex',
                    flexDirection: 'column',
                    itemAlign: "center",
                    justifyContent: "center",
                    top: "0",
                    left: "0",
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 10,
                    }}
                >
                    <Box
                            style={{
                                background: 'white',
                                padding: 27,
                                width: "85vw",
                                margin: '10% auto',
                                borderRadius: 6,
                            }}
                        >
                            <Box>{questions[selectedId].question}</Box>
                        </Box>

                    {Object.entries(questions[selectedId].answers).map(([key,value],index:number) => (
                        <Box className="flex col items-center justify-center">
                            <Button
                                key={index}
                                onClick={() => setSelectedId(null)}
                                sx={{
                                    background: 'rgba(206, 235, 255, 1)',
                                    height: "5rem",
                                    width: "18.75rem",
                                    borderRadius: 2,
                                    color: "black",
                                    mt: "2rem"
                                }}
                            >
                                {value.answer}
                            </Button>
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
};
