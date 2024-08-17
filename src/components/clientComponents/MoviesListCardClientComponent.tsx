'use client'
import React, {FC} from 'react';
import styles from "@/components/movies/movieList/moviesList.module.css";
import Link from "next/link";
import PosterPreview from "@/components/movies/movieList/PosterPreview";
import StarsRating from "@/components/movies/StarsRating";
import {IMovie} from "@/models/movie/IMovie";
import {useAppSelector} from "@/app/GlobalRedux/store";

interface IProps {
    releaseDate: string,
    movieFromList: IMovie,
    itemId: number
}

const MoviesListCardClientComponent: FC<IProps> = ({releaseDate, movieFromList, itemId}) => {
    const {isDarkTheme} = useAppSelector(state => state.themeToggleSliceState)
    return (
        <div className={[styles.movieCard, (isDarkTheme && styles.movieCardDark)].join(" ")}>
            <Link className={styles.navigationPage} href={'/movies/' + itemId}>
                <PosterPreview imagePath={movieFromList.poster_path} size={2}/>
                <div className={styles.movieList}>
                    <StarsRating voteAverage={movieFromList.vote_average}/>
                    <h1 className={[styles.healingTwo, (isDarkTheme && styles.healingTwoDark)].join(" ")
                    }>{movieFromList.title}</h1>
                    <ul className={styles.description}>
                        {movieFromList.genres.map(genre =>
                            <li key={genre.id}
                                className={[styles.genreItem, (isDarkTheme && styles.genreItemDark)].join(" ")
                                }>{genre.name}</li>)}
                        <li>{releaseDate}</li>
                    </ul>
                </div>
            </Link>
        </div>
    );
};

export default MoviesListCardClientComponent;