import {Metadata} from "next";
import React from "react";

const metaData: Metadata = {
    title: 'Movie',
}
const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout