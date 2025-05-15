"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Grid } from "@mui/material";
import { questions } from "../mbtiQuestions";

export default function QuestionObjects(props: {checkedObjects: string[]}) {
    const { checkedObjects } = props;
    const [ leftObjects, setLeftObjects ] = useState<string[]>([]);

    useEffect(() => {
        const objects: string[] = Object.keys(questions);
        const filtered = objects.filter(item => !checkedObjects.includes(item));
        const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 8);
        setLeftObjects(selected);
    }, []);

    return (
        <Grid container spacing={0} style={{flexGrow: 1}}>
            {leftObjects.map((object, index) => (
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
                        style={{ objectFit: "contain" }}
                    />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
