"use client";
import React, { useState, useEffect } from "react";
import { 
    Button, 
    Box,
} from "@mui/material";
import { questions } from "../mbtiQuestions"
import { Dispatch, SetStateAction } from "react";

type MainButtonProps = {
    selectedId: string | null
    setSelectedId: Dispatch<SetStateAction<string | null>>;
    checkedList: string[];
    selectedIndex: number | null;
    updateObject: (index: number, checkedId: string) => void;
};

export const ModelButton = (props: MainButtonProps) => {
    const {
        selectedId,
        setSelectedId,
        checkedList,
        selectedIndex,
        updateObject
    } = props;

    const [isTapped, setIsTapped] = useState<number | null>(null); // 押した感のアニメーションを再生するためのフラグ
    const [resultObject, setResultObject] = useState<Record<string, number>>({"E": 0, "S": 0, "T": 0, "J": 0}); // MBITのポイントを管理するステート

    // クリックしたときの処理
    // ここで、押した感を演出するアニメーションを再生してから、selectedIdとselectedIndexを更新する
    function handleTap(answerIndex: number){
        setIsTapped(answerIndex);
        setTimeout(() => {
            setIsTapped(null);
            setSelectedId(null);
            updateObject(selectedIndex!, selectedId!);
        }, 250);
    };

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

                    {questions[selectedId].answers.map((value, index) => (
                        <Box 
                            className="flex col items-center justify-center"
                            key={index}
                        >
                            <Button
                                className={isTapped === index ? "scale-90 shadow-inner" : "scale-100"}
                                onClick={() => {
                                    setResultObject(prev => {
                                        // newResultObjectを作成
                                        const newResultObject = {...prev};
                                        Object.entries(value.point).map(([_ ,value]) => {
                                            newResultObject[value.type] = newResultObject[value.type] + value.point;
                                        });
                                        // データを保存
                                        console.log(newResultObject);
                                        document.cookie = `progress=${encodeURIComponent(JSON.stringify( newResultObject ))}; path=/; max-age=604800`;
                                        return newResultObject;
                                    });
                                    handleTap(index); 
                                }}
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
