import React from 'react';
import styles from './SearchMoviesStyles.module.css';

const SearchMoviesComponent = () => {
    return (
        <div className={styles.searchContainer}>
            <form action="/movies/search" className={styles.searchForm}>
                <input
                    type="text"
                    name="query"
                    placeholder="Search Movies"
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>Search</button>
            </form>
        </div>
    );
};

export default SearchMoviesComponent;
