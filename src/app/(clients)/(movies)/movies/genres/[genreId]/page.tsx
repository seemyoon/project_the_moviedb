import React from 'react';
import {movieService} from "@/services/api.service";
import PaginationComponent from "@/components/paginationComponent/PaginationComponent";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";
import MoviesListCard from "@/components/movies/movieList/MoviesListCard";

type searchParamsType = Record<string, string | undefined>
const GenrePage = async (
    {params, searchParams}:
        {
            params: { genreId: string },
            searchParams: searchParamsType
        }) => {
    const pageParam = ((searchParams["page"]) || "1");
    const moviesPage = await movieService.getMovieWithGenres(params.genreId, pageParam)

    return (
        <div>
            <div className={styles.moviesPage}>
                <div className={styles.moviesList}>
                    {moviesPage.results.map(value => <MoviesListCard key={value.id} itemId={value.id}/>)}
                </div>
                <PaginationComponent endPage={500}/>
            </div>
        </div>
    );
};

export default GenrePage;