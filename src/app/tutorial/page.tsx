"use client";
import { useState, useEffect, JSX, useRef } from "react";
import { MessageModal } from "../../components/MessageModal";
import Image from "next/image";
import { HighlightHint } from "../../components/HighlightHint";
import Sparkles from "../../components/Sparkles";

export default function TutorialPage() {
    // 表示するメッセージ一覧
    const messages: (string | JSX.Element)[] = [
        <span key="">MBIT診断へようこそ！<br/>MB<strong>IT</strong>診断は、<strong>IT</strong>イノベーション科が開発した、MBTI性格診断アプリです。</span>,
        "このアプリでは、あなたの性格を16のタイプに分類し、自己理解を深める手助けをします。",
        "診断を始める前に、いくつかの注意点があります。\n1. この診断はあくまで参考です。結果を鵜呑みにせず、自己理解の一助としてご利用ください。\n2. 診断結果は、あなたの性格を完全に表すものではありません。日々の経験や環境によって変化することもあります。\n3. 診断は約3分程度で完了します。リラックスして取り組んでください。",
        "それでは、診断を始めましょう！",
        "おや、どうやら本が3冊ほど置いてあるようです。\nあなたの性格を診断するために、この本をタップして確認してみましょう。",
    ];

    // 現在のメッセージ番号
    const [messageIndex, setMessageIndex] = useState<number>(0); // メッセージの表示進行度
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // モーダルの表示状態
    const [isShowObject, setIsShowObject] = useState<boolean>(false); // 診断用オブジェクトの表示状態
    const [isTapped, setIsTapped] = useState<boolean>(false); // 診断用オブジェクトをタップしたかどうか
    const objectRef = useRef<HTMLButtonElement>(null); // 診断用オブジェクトの参照

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

    function handleQuestionOpen() {
        // 診断用オブジェクトをタップした後の処理
        setIsTapped(true);
        setTimeout(() => {
            setIsTapped(false);
        }, 250);
        // setIsShowObject(false);
        // setIsModalOpen(false);
        // setMessageIndex(0); // メッセージをリセット
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
                    ref={objectRef}
                    className="absolute bottom-[30vh] left-[50vw] translate-x-[-50%] translate-y-[50%]"
                    onClick={handleQuestionOpen}
                >
                    <Image
                        src={`/objects/book.png`}
                        alt="book"
                        width={150}
                        height={150}
                        className={`animate-breathe ${isTapped ? "scale-90" : "scale-100"}`}
                        style={{
                            objectFit: "contain",
                            filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))"
                        }}
                        priority={true}
                    />
                    {(isTapped) && (<Sparkles/>)}
                </button>
            )}
            {(!isModalOpen && isShowObject  && messageIndex >= 4 && objectRef.current) && (
                <HighlightHint message="この本をタップ！" targetRef={objectRef}></HighlightHint>
            )}
        </div>
    );
}
