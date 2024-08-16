import React from 'react';
import {movieService} from "@/services/api.service";
import styles from "@/components/movies/header/header.module.css";
import Link from "next/link";


const GenreComponent = async () => {
    const listOfGenres = await movieService.getGenres()
    return (
        <div className={styles.genreContainer}>
            <ul className={styles.dropdown}>
                {listOfGenres.map(genre => <Link className={styles.genreLinkContainer}
                     href={`/movies/genres/${genre.id}`} key={genre.id}>
                        <li>{genre.name}</li>
                </Link>)}
            </ul>
        </div>

    );
};

export default GenreComponent;