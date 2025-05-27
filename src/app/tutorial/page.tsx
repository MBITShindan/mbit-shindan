"use client";
import { useState, useEffect, JSX } from "react";
import { MessageModal } from "../../components/MessageModal";
import Image from "next/image";

export default function TutorialPage() {
    // 表示するメッセージ一覧
    const messages: (string | JSX.Element)[] = [
        <span key="">MBIT診断へようこそ！<br/>MB<strong>IT</strong>診断は、<strong>IT</strong>イノベーション科が開発した、MBTI性格診断アプリです。</span>,
        "このアプリでは、あなたの性格を16のタイプに分類し、自己理解を深める手助けをします。",
        "診断を始める前に、いくつかの注意点があります。\n1. この診断はあくまで参考です。結果を鵜呑みにせず、自己理解の一助としてご利用ください。\n2. 診断結果は、あなたの性格を完全に表すものではありません。日々の経験や環境によって変化することもあります。\n3. 診断は約3分程度で完了します。リラックスして取り組んでください。",
        "それでは、診断を始めましょう！",
        "おや、どうやら本が3冊ほど置いてあるようです。\nあなたの性格を診断するために、これらの本をタップして確認してみましょう。",
    ];

    // 現在のメッセージ番号
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isShowObject, setIsShowObject] = useState<boolean>(false);

    function handleMessageClose() {
        if(messageIndex === 3) {
            // 「診断を始めましょう」の後、診断用オブジェクトを確認するフェーズを挟む
            setIsModalOpen(false);
            setIsShowObject(true);
            setTimeout(() => {
                setMessageIndex(4);
                setIsModalOpen(true);
                console.log("診断用オブジェクトを確認してください");
            }, 1000);
            return;
        }

        // それ以外の処理
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
                position: "relative",
                backgroundImage: "url('home.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column"
            }}
        >
            {isModalOpen && (
                <MessageModal
                    message={messages[messageIndex]}
                    onClose={handleMessageClose}
                />
            )}
            {isShowObject && (
                <button
                    className="absolute bottom-[30vh] left-[50vw] translate-x-[-50%] translate-y-[50%]"
                    onClick={() => {
                        // handleTap(index, object.id)
                    }}
                >
                    <Image
                        src={`/objects/book.png`}
                        alt="book"
                        width={150}
                        height={150}
                        // className={`animate-breathe ${isTapped === object.id ? "scale-90" : "scale-100"}`}
                        className={`animate-breathe`}
                        style={{
                            objectFit: "contain",
                            filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))"
                        }}
                        priority={true}
                    />
                    {/* {(isTapped === object.id) && (<Sparkles/>)} */}
                </button>
            )}
            {/* <span>{`isModalOpen: ${isModalOpen}, messageIndex: ${messageIndex}, isShowObject: ${isShowObject}`}</span> */}
        </div>
    );
}
