"use client";
import React, { useState, JSX, Fragment } from "react";

type MessageModalProps = {
    message: string | JSX.Element;
    onClose: () => void;
};

export function MessageModal({ message, onClose }: MessageModalProps) {
    const formattedMessage: JSX.Element[] | string = 
        typeof message === "string" ? (
            message.split("\n").map((line, idx) => (
                <Fragment key={idx}>
                    {line}
                    <br/>
                </Fragment>
            ))
    ) : (
        [message]
    );

    const [isTapped, setIsTapped] = useState(false);

    function handleTap(){
        setIsTapped(true);
        setTimeout(() => {
            setIsTapped(false);
            onClose();
        }, 250);
    };

    return (
        <div className="relative w-full h-full">
            <button
                onClick={handleTap}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-black/50"
            >
                <div
                    className={`bg-white rounded-md p-6 w-[85vw] max-w-md text-left text-lg text-black transition-transform duration-200 ${
                        isTapped ? "scale-90" : "scale-100"
                    }`}
                >
                    {formattedMessage}
                </div>
            </button>
            <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 mb-4 text-white text-3xl">タップして次へ</div>
        </div>
    );
}
