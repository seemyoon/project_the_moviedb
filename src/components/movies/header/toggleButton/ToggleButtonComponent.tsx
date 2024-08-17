'use client'
import React, {useEffect} from "react";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import {toggleTheme, useAppDispatch, useAppSelector} from "@/app/GlobalRedux/store";

const ToggleButtonComponent = () => {
    const themeToggleSliceState = useAppSelector(state => state.themeToggleSliceState.isDarkTheme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const themeFromLocalStorage = JSON.parse(localStorage.getItem("isDarkTheme") || 'false');

        if (themeFromLocalStorage !== null && themeFromLocalStorage !== themeToggleSliceState) {
            dispatch(toggleTheme());
        }
    }, [dispatch]);

    useEffect(() => {

        localStorage.setItem('isDarkTheme', JSON.stringify(themeToggleSliceState));

        const headerContainer = document.body.querySelector("header") as HTMLElement;
        const uLContainer = headerContainer.querySelector("ul") as HTMLElement;

        if (themeToggleSliceState) {
            document.body.classList.add('darkTheme');
            uLContainer.classList.add("headerContainerDark");
        } else {
            document.body.classList.remove('darkTheme');
            uLContainer.classList.remove("headerContainerDark");
        }
    }, [themeToggleSliceState]);

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