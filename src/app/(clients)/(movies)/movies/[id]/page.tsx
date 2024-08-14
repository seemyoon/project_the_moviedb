import React from 'react';
import {movieService} from "@/services/api.service";
import PosterPreview from "@/components/movies/movieList/PosterPreview";
import styles from "./page.module.css";

const MoviePage = async ({params}: { params: { id: string } }) => {
    const getMovieById = await movieService.movieUrlById(params.id);

    return (
        <div className={styles.container}>
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
                <h2>Genres</h2>
                <ul>
                    {getMovieById.genres.map(genre => (
                        <li key={genre.id} className={styles.genreItem}>{genre.name}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.details}>
                <h2>Details</h2>
                <p><strong>Original Title:</strong> {getMovieById.original_title}</p>
                <p><strong>Original Language:</strong> {getMovieById.original_language}</p>
                <p><strong>Status:</strong> {getMovieById.status}</p>
                <p><strong>Budget:</strong> ${getMovieById.budget.toLocaleString()}</p>
                <p><strong>Country:</strong> {getMovieById.origin_country.join(', ')}</p>
            </div>

            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>{getMovieById.overview}</p>
            </div>
        </div>
    );
};

export default MoviePage;
