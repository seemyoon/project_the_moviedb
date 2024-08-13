import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";


export const metadata: Metadata = {
    title: "Movie",
    description: "there are list of movie",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <HeaderComponent/>
        {children}
        </body>

        </html>
    );
}
