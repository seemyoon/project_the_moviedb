import React from 'react';
import PaginationComponent from "@/components/paginationComponent/PaginationComponent";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";
import {searchResults} from "@/services/api.service";
import SearchCollectionMoviesList from "@/components/movies/search movies/SearchCollectionMoviesList";

type searchParamsType = Record<string, string | undefined>
const SearchPage = async (
    {searchParams}: { searchParams: searchParamsType }) => {
    const pageParam = ((searchParams["page"]) || "1");
    const queryParam = searchParams["query"] || "";
    const moviesPage = await searchResults.getSearchResults(queryParam, pageParam)
    return (
        <div>
            <div className={styles.moviesPage}>
                <div className={styles.moviesList}>
                    {moviesPage.results.length > 0 ? (moviesPage.results.map(value => <SearchCollectionMoviesList
                            key={value.id} itemId={value.id}/>))
                        : (
                            <div className={styles.noResults}>
                                <h2>Sorry, no results found for your query</h2>
                            </div>)}
                </div>
                <PaginationComponent endPage={moviesPage.total_pages}/>
            </div>
        </div>
    );
};

export default SearchPage;