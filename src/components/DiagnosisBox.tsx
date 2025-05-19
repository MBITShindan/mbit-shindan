"use client";
import QuestionObjects from "@/components/QuestionObjects";
import DiagnosisProgress from "./DiagnosisProgress";
import { useState, useEffect } from "react";

export default function DiagnosisBox(props: {checkedObjects: string[]}) {
    const { checkedObjects } = props;

    const [checkedList, setCheckedList] = useState<string[]>([]);
    useEffect(() => {
        setCheckedList(checkedObjects);
    }, [checkedObjects]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100dvh",
                overflow: "hidden",
                position: "fixed",
                backgroundImage: "url('/home.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <DiagnosisProgress checkedCount={checkedList.length}/>
            <QuestionObjects checkedList={checkedList} setCheckedList={setCheckedList}/>
        </div>
    );
}
