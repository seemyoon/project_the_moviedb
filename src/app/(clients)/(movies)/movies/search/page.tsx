import React from 'react';
import {searchResults} from "@/services/api.service";
import PaginationComponent from "@/components/movies/PaginationComponent";
import styles from "@/app/(clients)/(movies)/movies/page.module.css";
import SearchCollectionMoviesList from "@/components/movies/search movies/SearchCollectionMoviesList";

type SearchParamsType = Record<string, number | undefined>;
const SearchPage = async ({searchParams}: { searchParams: SearchParamsType }) => {
    const query = String(searchParams["query"]);
    const getCollection = await searchResults.getCollection(query)
    return (
        <div>
            <div className={styles.moviesPage}>
                <div className={styles.moviesList}>
                    {getCollection.results.length > 0 ? (getCollection.results.map(value => <SearchCollectionMoviesList
                        key={value.id} item={value}/>)) : (
                        <div className={styles.noResults}>
                            <h2>Sorry, no results found for your query</h2>
                        </div>)}
                </div>
                <PaginationComponent currentPage={getCollection.page} endPage={getCollection.total_pages}/>
                {/* todo pagination with end page , at the same time 2,3 page   */}
            </div>
        </div>
    );
};

export default SearchPage;