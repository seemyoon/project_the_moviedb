'use client'
import React, {ReactNode} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from "@/app/GlobalRedux/store";

type ProviderProps = {
    children: ReactNode;
}
const Provider = ({children}: ProviderProps) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
};

export default Provider;