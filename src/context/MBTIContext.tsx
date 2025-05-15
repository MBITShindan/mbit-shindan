"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ContextType = {
    value: string;
    setValue: (val: string) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

export const MBTIProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState("初期値");

    return (
        <Context.Provider value={{ value, setValue }}>
            {children}
        </Context.Provider>
    );
};

export const useMBTIContext = () => {
    const context = useContext(Context);
    if (!context) throw new Error("useMyContext must be used within MyContextProvider");
    return context;
};
