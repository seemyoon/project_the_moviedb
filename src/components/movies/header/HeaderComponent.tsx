import React from 'react';
import Image from "next/image";
import GenreComponent from "@/components/movies/genres/GenreComponent";
import styles from "@/components/movies/header/header.module.css";
import {urlBuilder} from "@/constants/urls";
import SearchMoviesComponent from "@/components/movies/search movies/SearchMoviesComponent";
import UserInfoComponent from "@/components/movies/userInfo/UserInfoComponent";
import Link from "next/link";
import ToggleButtonComponent from "@/components/movies/header/toggleButton/ToggleButtonComponent";


const HeaderComponent = () => {

    return (
        <header className={styles.mainContainer}>
            <ul className={styles.headerContainer}>
                <li>
                    <Link href={"/movies/"}>
                        <Image src={urlBuilder.logoUrl} alt="logo" width={130} height={50}/>
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
                    <SearchMoviesComponent/>
                </li>
                <li>
                    <UserInfoComponent/>
                </li>
                <li>
                    <ToggleButtonComponent/>
                </li>
            </ul>
        </header>
    );
};

export default HeaderComponent;
