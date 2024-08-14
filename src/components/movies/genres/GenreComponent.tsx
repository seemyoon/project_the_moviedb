import React from 'react';
import {movieService} from "@/services/api.service";
import styles from "@/components/movies/header/header.module.css";


const GenreComponent = async () => {
    const listOfGenres = await movieService.getGenres()
    return (
        <div className={styles.genreContainer}>
            <ul className={styles.dropdown}>
                {listOfGenres.map(genre => <li key={genre.id}><p>{genre.name}</p></li>)}
            </ul>
        </div>

    );
};

export default GenreComponent;