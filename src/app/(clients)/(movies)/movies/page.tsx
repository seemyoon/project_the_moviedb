import React from 'react';
import PaginationComponent from "@/components/paginationComponent/PaginationComponent";
import { movieService } from "@/services/api.service";
import MoviesListCard from "@/components/movies/movieList/MoviesListCard";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";

type SearchParamsType = Record<string, number | undefined>;

const MoviesList = async ({ searchParams }: { searchParams: SearchParamsType }) => {
    const pageParam = (Number(searchParams["page"]) || 1);
    const moviesPage = await movieService.moviesPage(pageParam);

    return (
        <section className={styles.moviesPage}>
            <div className={styles.moviesList}>
                {moviesPage.results.length > 0 ? (
                    moviesPage.results.map(value => (
                        <MoviesListCard key={value.id} itemId={value.id} />
                    ))
                ) : (
                    <div className={styles.noResults}>No Results Found</div>
                )}
            </div>
            <PaginationComponent currentPage={moviesPage.page} endPage={moviesPage.total_pages} />
        </section>
    );
};

export default MoviesList;
