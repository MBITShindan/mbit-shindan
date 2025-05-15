"use client";
import type { AppProps } from "next/app";
import { MBTIProvider } from "../context/MBTIContext";

export default function Provides({ Component, pageProps }: AppProps) {
    return (
        <MBTIProvider>
            <Component {...pageProps} />
        </MBTIProvider>
    );
};
