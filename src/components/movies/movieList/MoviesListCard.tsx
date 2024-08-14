import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import styles from "@/components/movies/movieList/moviesList.module.css"
import PosterPreview from "@/components/movies/movieList/PosterPreview";
import {IMovie} from "@/models/movies/movie/IMovie/IMovie";
import Link from "next/link";

interface IProps {
    item: IMovie
}

const MoviesListCard: FC<IProps> = async ({item}) => {
    const movieFromList = await movieService.movieUrlById(item.id)
    return (
        <Link className={styles.navigationPage} href={'/movies/' + item.id}>
            <div className={styles.movieList}>
                <PosterPreview imagePath={movieFromList.poster_path} size={2}/>
                <h1 className={styles.healingTwo}>{movieFromList.title}</h1>
                <ul className={styles.description}>{movieFromList.genres.map(genre => <li key={genre.id}>
                    {genre.name}
                </li>)}</ul>
            </div>
        </Link>
    );
}

export default MoviesListCard;
