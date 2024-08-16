import React from 'react';
import PaginationComponent from "@/components/paginationComponent/PaginationComponent";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";
import SearchCollectionMoviesList from "@/components/movies/search movies/SearchCollectionMoviesList";
import {searchResults} from "@/services/api.service";

type SearchParamsType = Record<string, number | undefined>;
const SearchPage = async ({searchParams}: { searchParams: SearchParamsType }) => {
    const query = String(searchParams["query"]);
    const moviesPage = await searchResults.getSearchResults(query);
    return (
        <div>
            <div className={styles.moviesPage}>
                <div className={styles.moviesList}>
                    {moviesPage.results.length > 0 ? (moviesPage.results.map(value => <SearchCollectionMoviesList
                        key={value.id} itemId={value.id}/>)) : (
                        <div className={styles.noResults}>
                            <h2>Sorry, no results found for your query</h2>
                        </div>)}
                </div>
                <PaginationComponent currentPage={moviesPage.page} endPage={moviesPage.total_pages}/>
                {/* todo pagination with end page , at the same time 2,3 page   */}
            </div>
        </div>
    );
};

export default SearchPage;