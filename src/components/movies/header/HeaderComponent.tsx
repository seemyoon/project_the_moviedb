import React from 'react';
import Image from "next/image";

import GenreComponent from "@/components/movies/genres/GenreComponent";
import styles from "@/components/movies/header/header.module.css";
import {urlBuilder} from "@/constants/urls";
import SearchMoviesComponent from "@/components/movies/search movies/SearchMoviesComponent";
import UserInfoComponent from "@/components/movies/userInfo/UserInfoComponent";

const HeaderComponent = () => {
    return (
        <div className={styles.mainContainer}>
            <ul className={styles.headerContainer}>
                <li>
                    <Image src={urlBuilder.logoUrl} alt="logo" width={100} height={100}/>
                </li>
                <li className={styles.genreContainer}>
                    <p>Genres</p>
                    <GenreComponent/>
                </li>
                <li>
                    <SearchMoviesComponent/>
                </li>
                <li>
                    <UserInfoComponent/>
                </li>
            </ul>
        </div>

    // todo /use bootstrap
    );
};

export default HeaderComponent;