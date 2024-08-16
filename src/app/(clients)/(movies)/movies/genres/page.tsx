import React from 'react';
import {movieService} from "@/services/api.service";
import styles from "./page.module.css"
import Link from "next/link";

const GenresPage = async () => {
    const listOfGenres = await movieService.getGenres()

    return (
        <div className={styles.genresContainer}>
                <ul className={styles.genresListContainer}>
                    {listOfGenres.map(genre => <Link href={`/movies/genres/${genre.id}`} className={styles.genreContainer} key={genre.id}><p>{genre.name}</p></Link>)}
                </ul>
        </div>
    );
};

export default GenresPage;