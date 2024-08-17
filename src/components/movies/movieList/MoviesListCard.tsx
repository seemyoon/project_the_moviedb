import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import MoviesListCardClientComponent from "@/components/clientComponents/MoviesListCardClientComponent";

interface IProps {
    itemId: number;
}

const MoviesListCard: FC<IProps> = async ({itemId}) => {
    const movieFromList = await movieService.movieUrlById(itemId);
    const releaseDate = movieFromList.release_date.substring(0, 4);

    return (

        <MoviesListCardClientComponent releaseDate={releaseDate} movieFromList={movieFromList} itemId={itemId}/>

    );
}

export default MoviesListCard;
