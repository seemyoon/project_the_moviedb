import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import HeaderComponent from "@/components/movies/header/HeaderComponent";


export const metadata: Metadata = {
    title: "Movie",
    description: "there are list of movie",
    icons: {
        icon: ['./favicon.ico?v=4'], // todo with favicon (why 2 requests) and then then remove ?. in MoviePage
        apple: ['./apple-touch-icon.png?v=4'],
    }
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
