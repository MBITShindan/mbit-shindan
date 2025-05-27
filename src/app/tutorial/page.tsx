"use client";
import { useState, useEffect, JSX } from "react";
import { MessageModal } from "../../components/MessageModal";

export default function TutorialPage() {
    // 表示するメッセージ一覧
    const messages: (string | JSX.Element)[] = [
        <span>MBIT診断へようこそ！<br/>MB<strong>IT</strong>診断は、<strong>IT</strong>イノベーション科が開発した、MBTI性格診断アプリです。</span>,
        "このアプリでは、あなたの性格を16のタイプに分類し、自己理解を深める手助けをします。",
        "診断を始める前に、いくつかの注意点があります。\n1. この診断はあくまで参考です。結果を鵜呑みにせず、自己理解の一助としてご利用ください。\n2. 診断結果は、あなたの性格を完全に表すものではありません。日々の経験や環境によって変化することもあります。\n3. 診断は約3分程度で完了します。リラックスして取り組んでください。",
    ];

    // 現在のメッセージ番号
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function handleMessageClose() {
        // 次のメッセージがあれば進める
        if (messageIndex < messages.length - 1) {
            setMessageIndex((prev) => prev + 1);
        } else {
            // すべてのメッセージが終わったら閉じる
            setIsModalOpen(false);
        }
    }

    useEffect(() => {
        // 最初のメッセージを表示
        setIsModalOpen(true);
    }, []);

    return (
        <div
            style={{
                width: "100vw",
                height: "100dvh",
                overflow: "hidden",
                position: "fixed",
                backgroundImage: "url('home.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {isModalOpen && (
                <MessageModal
                    message={messages[messageIndex]}
                    onClose={handleMessageClose}
                />
            )}
        </div>
    );
}
