`use client`

import React from "react";
import { 
    Button, 
    Box,
} from "@mui/material";
import { useState } from "react"
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
                    top: "0",
                    left: "0",
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 10,
                    }}
                >
                    <Box>
                        <Box
                                style={{
                                    background: 'white',
                                    padding: 27,
                                    width: "18.75rem",
                                    margin: '10% auto',
                                    borderRadius: 6,
                                }}
                            >
                                <Box>{questions[selectedId].question}</Box>
                            </Box>

                        {Object.entries(questions[selectedId].answers).map(([key,value],index:number) => (
                            <Button
                                key={index}
                                onClick={() => setSelectedId(null)}
                                sx={{
                                    background: 'primary',
                                    height: "5rem",
                                    width: "18.75rem",
                                    margin: '5% auto',
                                    borderRadius: 2,
                                    color: "black"
                                }}
                            >
                                {value.answer}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}
        </>
    );
};