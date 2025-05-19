`use client`

import React from "react";
import { 
    Button, 
    ButtonProps,
    Box,
} from "@mui/material";
import { useState } from "react"
import { questions } from "../mbtiQuestions"

type MainButtonProps = ButtonProps & {
    children: React.ReactNode;
    questionsKey: string;
};

export const ModelButton = ({ children, questionsKey,...props }:MainButtonProps ) =>{
    const [open, setOpen] = useState(false);
    const questionsData = questions[questionsKey]

    return(
        <>
            <Button
                color="primary"
                variant="contained"
                onClick={() => setOpen(true)}
                {...props}
            >
                {children}
            </Button>
            {open && (
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
                                <Box>{questionsData.question}</Box>
                            </Box>

                        {Object.entries(questionsData.answers).map(([key,value],index:number) => (
                            <Button
                                key={index}
                                onClick={() => setOpen(false)}
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