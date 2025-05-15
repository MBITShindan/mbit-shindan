"use client";
import { Grid } from "@mui/material";
import { questions } from "../mbtiQuestions";
import { useEffect, useState } from "react";

export default function QuestionObjects(props: {checkedObjects: string[]}) {
    const { checkedObjects } = props;
    const [ leftObjects, setLeftObjects ] = useState<string[]>([]);

    useEffect(() => {
        const objects: string[] = Object.keys(questions);
        const filtered = objects.filter(item => !checkedObjects.includes(item));
        setLeftObjects(filtered);
    }, []);

    return (
        <Grid container spacing={0} style={{flexGrow: 1}}>
            {leftObjects.map((object, index) => (
                <Grid size={6} key={index}>
                    {object}
                </Grid>
            ))}
        </Grid>
    );
}
