import React from 'react';
import {movieService} from "@/services/api.service";
import MoviePageClientComponent from "@/components/clientComponents/MoviePageClientComponent";

const MoviePage = async ({params}: { params: { id: string } }) => {
    const getMovieById = await movieService.movieUrlById(params.id);

    return (
        <MoviePageClientComponent getMovieById={getMovieById}/>

    );
};

export default MoviePage;
