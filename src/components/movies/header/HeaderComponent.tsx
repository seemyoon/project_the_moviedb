import React from 'react';
import Image from "next/image";

import GenreComponent from "@/components/movies/genres/GenreComponent";
import styles from "@/components/movies/header/header.module.css";
import {urlBuilder} from "@/constants/urls";
import SearchMoviesComponent from "@/components/movies/search movies/SearchMoviesComponent";
import UserInfoComponent from "@/components/movies/userInfo/UserInfoComponent";
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className={styles.mainContainer}>
            <ul className={styles.headerContainer}>
                <li>
                    <Link href={"/movies/"}>
                        <Image src={urlBuilder.logoUrl} alt="logo" width={100} height={100}/>
                    </Link>
                </li>
                <li>
                    <Link className={styles.linkContainer} href={"/movies/"}>
                        Home
                    </Link>
                </li>
                <li className={styles.genreContainer}>
                    <Link className={styles.linkContainer} href={"/movies/genres"}>Genres</Link>
                    <GenreComponent/>
                </li>
                <li>
                    <SearchMoviesComponent/> {/*  todo styles for SearchMoviesComponent*/}
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