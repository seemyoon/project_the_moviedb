import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import styles from "@/components/movies/movieList/moviesList.module.css"
import PosterPreview from "@/components/movies/movieList/PosterPreview";
import Link from "next/link";
import StarsRating from "@/components/movies/StarsRating";


interface IProps {
    itemId: number
}

const MoviesListCard: FC<IProps> = async ({itemId}) => {
    const movieFromList = await movieService.movieUrlById(itemId)
    const releaseDate = movieFromList.release_date.substring(0, 4)

    return (
        <div>
            <Link className={styles.navigationPage} href={'/movies/' + itemId}>
                    <PosterPreview imagePath={movieFromList.poster_path} size={2}/>
                <div className={styles.movieList}>
                    <StarsRating voteAverage={movieFromList.vote_average}/>
                    <h1 className={styles.healingTwo}>{movieFromList.title}</h1>
                    <ul className={styles.description}>
                        {movieFromList.genres.map(genre =>
                            <li key={genre.id}>{genre.name}</li>)} <br/>
                        <li>{releaseDate}</li>
                    </ul>
                </div>
            </Link>
        </div>

    );
}

export default MoviesListCard;
