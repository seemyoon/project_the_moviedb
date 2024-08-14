import React from 'react';
import PaginationComponent from "@/components/movies/PaginationComponent";
import {movieService} from "@/services/api.service";
import MoviesListCard from "@/components/movies/movieList/MoviesListCard";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";

type SearchParamsType = Record<string, number | undefined>;
const MoviesList = async ({searchParams}: { searchParams: SearchParamsType }) => {

    const pageParam = searchParams["page"];
    const page = Number(pageParam) && Number(pageParam) > 0 ? Number(pageParam) : 1; //todo error and logic
    const moviesPage = await movieService.moviesPage(page);
    return (
        <div className={styles.moviesPage}>
            <div className={styles.moviesList}>
                {moviesPage.results.map(value => <MoviesListCard key={value.id} item={value}/>)}
            </div>
            <PaginationComponent currentPage={moviesPage.page} endPage={moviesPage.total_pages}/>
        </div>
    );
};

export default MoviesList;
