"use client";
import React, { useState } from "react";
import { 
    Button, 
    Box,
} from "@mui/material";

export function TutorialQuestion(props: {
    handleQuestionClose: () => void;
    highlightRef: React.RefObject<HTMLButtonElement | null>; // ハイライトの参照
    isActive: boolean; // 質問がアクティブかどうか
}){
    const {
        handleQuestionClose,
        highlightRef,
        isActive
    } = props;

    const [isTapped, setIsTapped] = useState<boolean>(false); // 押した感のアニメーションを再生するためのフラグ

    // クリックしたときの処理
    // ここで、押した感を演出するアニメーションを再生する
    function handleTap(){
        setIsTapped(true);
        setTimeout(() => {
            setIsTapped(false);
            handleQuestionClose();
        }, 250);
    };

    return(
        <Box
            className="fixed flex flex-col items-center justify-center z-10"
            sx={{
                top: "0",
                left: "0",
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 10,
            }}
        >
            <Box
                className="text-lg text-left"
                style={{
                    background: 'white',
                    padding: 27,
                    width: "85vw",
                    margin: '10% auto',
                    borderRadius: 6,
                }}
            >
                <Box>部屋に本が3冊置いてあります。あなたならどれを手に取りますか？</Box>
            </Box>

            {["漫画", "小説", "雑誌"].map((value, index) => (
                <Box 
                    className="flex col items-center justify-center"
                    sx={{ maxWidth: "80vw" }}
                    key={index}
                >
                    <Button
                        ref={index === 0 ? highlightRef : null} // 最初のボタンにハイライトを設定
                        className={(isTapped && index === 0) ? "scale-90 shadow-inner" : "scale-100"}
                        onClick={() => {if(index === 0 && isActive) handleTap()}}
                        sx={{
                            background: 'rgba(206, 235, 255, 1)',
                            height: "5rem",
                            width: "18.75rem",
                            borderRadius: 2,
                            color: "black",
                            padding: "1rem",
                            mt: "2rem"
                        }}
                    >
                        <span className="text-lg text-left">{value}</span>
                    </Button>
                </Box>
            ))}
        </Box>
    );
};
