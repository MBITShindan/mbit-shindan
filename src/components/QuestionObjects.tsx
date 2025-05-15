"use client";
import { Grid } from "@mui/material";
import { questions } from "../mbtiQuestions";

const objects: string[] = Object.keys(questions);

export default function QuestionObjects() {
    return (
        <Grid container spacing={0} style={{flexGrow: 1}}>
            {objects.map((object, index) => (
                <Grid size={6} key={index}>
                    {object}
                </Grid>
            ))}
        </Grid>
    );
}
