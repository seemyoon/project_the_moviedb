'use client'
import React from "react";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import {toggleTheme, useAppDispatch, useAppSelector} from "@/app/GlobalRedux/store";

const ToggleButtonComponent = () => {
    const themeToggleSliceState = useAppSelector(state => state.themeToggleSliceState.isDarkTheme)
    const dispatch = useAppDispatch()

    // console.log(themeToggleSliceState) //todo why 2 output
    return (
        <div>
            <DarkModeSwitch
                checked={themeToggleSliceState}
                onChange={() => dispatch(toggleTheme())}
                size={40}
            />
        </div>
    );
}


export default ToggleButtonComponent;