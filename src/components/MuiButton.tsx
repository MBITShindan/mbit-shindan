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
            {...props}
        >
            {children}
        </Button>
    )
};