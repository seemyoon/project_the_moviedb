import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import HeaderComponent from "@/components/movies/header/HeaderComponent";
import "@/app/toggleThemeColor.css"
import { Montserrat } from 'next/font/google'
import Provider from "@/app/GlobalRedux/provider"

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});
export const metadata: Metadata = {
    title: "Movie",
    description: "there are list of movie",
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['/apple-touch-icon.ico?v=4'],
    }
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Provider>
            <body className={montserrat.className}>
            <HeaderComponent/>
            {children}
            </body>
        </Provider>
        </html>
    );
}
