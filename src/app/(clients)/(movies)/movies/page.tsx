import React from 'react';
import PaginationComponent from "@/components/paginationComponent/PaginationComponent";
import {movieService} from "@/services/api.service";
import MoviesListCard from "@/components/movies/movieList/MoviesListCard";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";

type SearchParamsType = Record<string, number | undefined>;
const MoviesList = async ({searchParams}: { searchParams: SearchParamsType }) => {

    const pageParam = (Number(searchParams["page"]) || 1); //todo error and logic
    const moviesPage = await movieService.moviesPage(pageParam);
    return (
        <div className={styles.moviesPage}>
            <div className={styles.moviesList}>
                {moviesPage.results.map(value => <MoviesListCard key={value.id} itemId={value.id}/>)}
            </div>
            <PaginationComponent currentPage={moviesPage.page} endPage={moviesPage.total_pages}/>
        </div>
    );
};

export default MoviesList;
