"use client";
import { useState, useEffect, JSX, useRef } from "react";
import { MessageModal } from "./MessageModal";
import Image from "next/image";
import { HighlightHint } from "./HighlightHint";
import Sparkles from "./Sparkles";
import { TutorialQuestion } from "./TutorialQuestion";

export default function TutorialPageClient() {
    // 表示するメッセージ一覧
    const messages: (string | JSX.Element)[] = [
        <span key="">MBIT診断へようこそ！<br/>MB<strong>IT</strong>診断は、<strong>IT</strong>イノベーション科が開発した、MBTI性格診断アプリです。</span>,
        "このアプリでは、あなたの性格を16のタイプに分類し、自己理解を深める手助けをします。",
        "診断を始める前に、いくつかの注意点があります。\n1. この診断はあくまで参考です。結果を鵜呑みにせず、自己理解の一助としてご利用ください。\n2. 診断結果は、あなたの性格を完全に表すものではありません。日々の経験や環境によって変化することもあります。\n3. 診断は約3分程度で完了します。リラックスして取り組んでください。",
        "それでは、診断を始めましょう！",
        "おや、どうやら本が3冊ほど置いてあるようです。\nあなたの性格を診断するために、この本をタップして確認してみましょう。",
        "さて、診断用の本をタップしたら、次の質問に答えてください。\n今回は試しに、「漫画」を選んでみましょう。",
        "これにより、性格診断が進みました。\n本番では、このように質問に答えていくことで、あなたの性格を診断します。",
        "これにて診断の説明は終了です。\n実際に診断を始めるには、タイトル画面から「性格診断」ボタンをタップしてください。\nそれでは、診断をお楽しみください！"
    ];

    // 現在のメッセージ番号
    const [messageIndex, setMessageIndex] = useState<number>(0); // メッセージの表示進行度
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // モーダルの表示状態
    const [isShowObject, setIsShowObject] = useState<boolean>(false); // 診断用オブジェクトの表示状態
    const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false); // 質問の表示状態
    const [isTapped, setIsTapped] = useState<boolean>(false); // 診断用オブジェクトをタップしたかどうか
    const objectRef = useRef<HTMLButtonElement>(null); // 診断用オブジェクトの参照
    const answerRef = useRef<HTMLButtonElement>(null); // 質問の回答ボタンの参照

    function handleMessageClose() {
        if(messageIndex === 3) {
            // 「診断を始めましょう」の後、診断用オブジェクトを確認するフェーズを挟む
            setIsModalOpen(false);
            setIsShowObject(true);
            setTimeout(() => {
                setMessageIndex(4);
                setIsModalOpen(true);
            }, 1000);
            return;
        }

        if(messageIndex === 4 || messageIndex === 5) {
            // 「本をタップ」「回答をタップ」の後、質問を開くフェーズを挟む
            setIsModalOpen(false);
            return
        }

        if(messageIndex === 7) {
            // 「診断の説明は終了」の後、タイトル画面に戻る
            setIsModalOpen(false);
            setTimeout(() => {
                window.location.href = "/"; // タイトル画面へリダイレクト
            }, 500);
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
        setIsQuestionOpen(true);
        setTimeout(() => {
            setIsTapped(false);
            setTimeout(() => {
                setMessageIndex(5);
                setIsModalOpen(true);
            }, 1000);
        }, 250);
    }

    function handleQuestionClose() {
        // 質問を閉じる処理
        setIsQuestionOpen(false);
        setIsShowObject(false);
        setTimeout(() => {
            setMessageIndex(6);
            setIsModalOpen(true);
        }, 500);
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
            {isQuestionOpen && (
                <TutorialQuestion
                    handleQuestionClose={handleQuestionClose}
                    highlightRef={answerRef}
                    isActive={messageIndex === 5}
                />
            )}
            {isShowObject && (
                <button
                    ref={objectRef}
                    className={"absolute bottom-[30vh] left-[50vw] translate-x-[-50%] translate-y-[50%]" + ((messageIndex === 4 && !isQuestionOpen) ? " z-30" : "")}
                    onClick={() => {
                        if(messageIndex !== 4) return;
                        if(!isModalOpen){
                            handleQuestionOpen();
                        }else{
                            handleMessageClose();
                        }
                    }}
                >
                    <Image
                        src="/objects/book.png"
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
            {(isShowObject && !isModalOpen && messageIndex === 4 && !isQuestionOpen && objectRef.current) && (
                <HighlightHint message="この本をタップ！" targetRef={objectRef}></HighlightHint>
            )}
            {(isQuestionOpen && !isModalOpen && messageIndex === 5 && answerRef.current) && (
                <HighlightHint message="この回答をタップ！" targetRef={answerRef}></HighlightHint>
            )}
        </div>
    );
}
