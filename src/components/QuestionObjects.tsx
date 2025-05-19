"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Grid } from "@mui/material";
import { questions } from "../mbtiQuestions";

type Position = {
    id: string;
    x: number;
    y: number;
};

// ランダムな位置を生成する関数
function getRandomPosition() {
    const x = Math.floor(Math.random() * 60) - 30; // -30 to 30
    const y = Math.floor(Math.random() * 60) - 30; // -30 to 30
    return { x, y };
}

const animations = ['animate-breathe1', 'animate-breathe2', 'animate-breathe3'];

export default function QuestionObjects(props: {checkedList: string[]}) {
    const { checkedList } = props;
    const [ leftObjects, setLeftObjects ] = useState<(Position | null)[]>([]);

    // 画面が表示されたときに、checkedListに含まれないオブジェクトをランダムに8個選択して表示する
    useEffect(() => {
        const objects: string[] = Object.keys(questions);
        const filtered = objects.filter(item => !checkedList.includes(item));
        const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 8);
        // xとyの値をランダムに-30から30の範囲で生成
        const positions: Position[] = selected.map((object) => ({
            id: object,
            ...getRandomPosition()
        }));
        setLeftObjects(positions);
    }, []);

    // index番目のオブジェクトを変更する関数
    // ここでは、checkedListに含まれないオブジェクトをランダムに1個選択して追加する
    function updateObject(index: number) {
        const newObjects = [...leftObjects];
        let newObject: Position | null = null;

        // ランダムに1個選択して置き換える
        // もし、追加できるオブジェクトがなければ、nullで置き換える
        const objects: string[] = Object.keys(questions);
        const filtered = objects.filter(item => !checkedList.includes(item));
        if (filtered.length > 0) {
            const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 1);
            newObject = {
                id: selected[0],
                ...getRandomPosition()
            };
        }

        newObjects[index] = newObject;
        setLeftObjects(newObjects);
    }


    return (
        <Grid container spacing={0} style={{flexGrow: 1}}>
            {(leftObjects).map((object, index) => (
                <Grid
                    key={index}
                    size={6}
                    className="p-6"
                >
                    <div className="relative w-full h-full">
                        {object && (
                            <Image
                                src={`/objects/${object.id}.png`}
                                alt={object.id}
                                fill
                                className={`${animations[Math.floor(Math.random() * animations.length)]}`}
                                style={{
                                    objectFit: "contain",
                                    marginLeft: `${object.x}px`,
                                    marginTop: `${object.y}px`
                                }}
                            />
                        )}
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
