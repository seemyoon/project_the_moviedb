'use client'
import React, {FC} from 'react';
import styles from "@/components/movies/header/header.module.css";
import Link from "next/link";
import {IGenre} from "@/models/movie/IGenre";
import {useAppSelector} from "@/app/GlobalRedux/store";

interface IProps {
    listOfGenres: IGenre[]
}

const GenreClientComponent: FC<IProps> = ({listOfGenres}) => {
    const {isDarkTheme} = useAppSelector(state => state.themeToggleSliceState)
    return (
        <div className={styles.genreContainer}>
            <ul className={[styles.dropdown, (isDarkTheme && styles.dropdownDark)].join(" ")}>
                {listOfGenres.map(genre => <Link className={[styles.linkContainer, (isDarkTheme && styles.linkContainerDark)].join(" ")}
                                                 href={`/movies/genres/${genre.id}`} key={genre.id}>
                    <li>{genre.name}</li>
                </Link>)}
            </ul>
        </div>

    );
};

export default GenreClientComponent;