import React from 'react';
import {movieService} from "@/services/api.service";
import GenreClientComponent from "@/components/clientComponents/GenreClientComponent";

const GenreComponent = async () => {
    const listOfGenres = await movieService.getGenres()
    return (
        <GenreClientComponent listOfGenres={listOfGenres}/>
    );
};

export default GenreComponent;