'use client'
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type DarkThemeToggleStateType ={
    isDarkTheme: boolean
}

const initialDarkThemeToggleState: DarkThemeToggleStateType = {
    isDarkTheme: false,
}
const themeToggleSlice = createSlice({
    name: "themeToggleSlice",
    initialState: initialDarkThemeToggleState,
    reducers: {
        toggleTheme(state) {
            state.isDarkTheme = !state.isDarkTheme
        }
    }
})
export const store = configureStore({
    reducer: {
        themeToggleSliceState: themeToggleSlice.reducer
    }
})

export const {toggleTheme} = themeToggleSlice.actions

type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()