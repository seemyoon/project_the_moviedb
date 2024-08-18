'use client'
import React, {FC} from 'react';
import styles from "@/app/(clients)/(movies)/movies/[id]/page.module.css";
import PosterPreview from "@/components/movies/movieList/PosterPreview";
import Link from "next/link";
import {IMovie} from "@/models/movie/IMovie";
import {Badge} from "@mui/material";
import BackButtonComponent from "@/components/backButtonComponent/BackButtonComponent";
import {ITrailer} from "@/models/movie/ITrailer/ITrailer";
import TrailerMovieComponent from "@/components/clientComponents/TrailerMovieComponent/TrailerMovieComponent";


interface IProps {
    getMovieById: IMovie,
    getTrailer: ITrailer
}

const MoviePageClientComponent: FC<IProps> = ({getMovieById, getTrailer}) => {
    const getTrailerKey = getTrailer.results?.map(videoTrailer => videoTrailer.key)?.filter(String)[0]
    return (
        <div>
            <div className={styles.container}>
                <BackButtonComponent/>

                <div className={styles.header}>
                    <PosterPreview imagePath={getMovieById.poster_path} size={3}/>
                    <div>
                        <h1 className={styles.title}>{getMovieById.title}</h1>
                        {styles.tagline && <p className={styles.tagline}>{getMovieById.tagline}</p>}
                        <p className={styles.releaseDate}>Release Date: {getMovieById.release_date}</p>
                        <p className={styles.runtime}>Runtime: {getMovieById.runtime} minutes</p>
                        <p className={styles.rating}>Rating: {getMovieById.vote_average} / 10
                            ({getMovieById.vote_count} votes)</p>
                    </div>
                </div>

                <div className={styles.genres}>
                    <h2>
                        <Badge badgeContent={getMovieById.genres?.length} color="success">
                            Genres
                        </Badge>
                    </h2>
                    <ul>
                        {getMovieById.genres?.map(genre =>
                            <Link className={styles.genreItem}
                                  href={`/movies/genres/${genre.id}`}
                                  key={genre.id}>
                                <li>{genre.name}</li>
                            </Link>)}
                    </ul>
                </div>

                <div className={styles.details}>
                    <h2>Details</h2>
                    <p><strong>Original Title:</strong> {getMovieById.original_title}</p>
                    <p><strong>Original Language:</strong> {getMovieById.original_language}</p>
                    <p><strong>Status:</strong> {getMovieById.status}</p>
                    {getMovieById.budget != 0 &&
                        <p><strong>Budget:</strong> ${getMovieById.budget?.toLocaleString()}</p>} {/*todo
                     take
                     notes*/}
                    <p><strong>Country:</strong> {getMovieById.origin_country?.join(', ')}</p>
                </div>

                <div className={styles.overview}>
                    <h2>Overview</h2>
                    <p>{getMovieById.overview}</p>
                </div>

                <div className={styles.overview}>
                    <h2>Trailer</h2>
                    <TrailerMovieComponent getTrailerKey={getTrailerKey}/>
                </div>
            </div>
        </div>
    );
};

export default MoviePageClientComponent;