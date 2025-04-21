import React from "react";
import { Button, ButtonProps } from "@mui/material";

type MainButtonProps = ButtonProps & {
    children: React.ReactNode;
};

export const MuiButton = ({ children, ...props }:MainButtonProps ) =>{
    return(
        <Button
            color="primary"
            variant="contained"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            {...props}
        >
            {children}
        </Button>
    )
};