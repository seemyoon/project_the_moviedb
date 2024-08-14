import React from 'react';

const SearchMoviesComponent = () => {
    return (
        <div>
            <form action={"/movies/search"}>
                <input type="text" name="query" placeholder="Search Movies"/>
                <button>Search</button>
                {/* todo list of results with "use client"*/}
            </form>
        </div>
    );
};

export default SearchMoviesComponent;