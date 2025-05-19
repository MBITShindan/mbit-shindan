"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Grid } from "@mui/material";
import { questions } from "../mbtiQuestions";

type Position = {
    x: number;
    y: number;
};

const animations = ['animate-breathe1', 'animate-breathe2', 'animate-breathe3'];

export default function QuestionObjects(props: {checkedObjects: string[]}) {
    const { checkedObjects } = props;
    const [ leftObjects, setLeftObjects ] = useState<{[objectName: string]: Position}>({});

    useEffect(() => {
        const objects: string[] = Object.keys(questions);
        const filtered = objects.filter(item => !checkedObjects.includes(item));
        const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 8);
        // xとyの値をランダムに-30から30の範囲で生成
        const positions: {[objectName: string]: Position} = {};
        selected.forEach((object) => {
            positions[object] = {
                x: Math.floor(Math.random() * 60) - 30,
                y: Math.floor(Math.random() * 60) - 30
            };
        });
        setLeftObjects(positions);
    }, []);

    return (
        <Grid container spacing={0} style={{flexGrow: 1}}>
            {Object.keys(leftObjects).map((object, index) => (
                <Grid
                    key={index}
                    size={6}
                    className="p-6"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={`/objects/${object}.png`}
                            alt={object}
                            fill
                            className={`${animations[Math.floor(Math.random() * animations.length)]}`}
                            style={{
                                objectFit: "contain",
                                marginLeft: `${leftObjects[object].x}px`,
                                marginTop: `${leftObjects[object].y}px`
                            }}
                        />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
