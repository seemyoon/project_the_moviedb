import React, {FC} from 'react';
import {ISearchCollectionResult} from "@/models/movies/searchMovies/ISearchCollectionResult";
import {movieService} from "@/services/api.service";
import styles from "@/components/movies/movieList/moviesList.module.css";
import PosterPreview from "@/components/movies/movieList/PosterPreview";

type IProps = {
    item: ISearchCollectionResult
}
const SearchCollectionMoviesList: FC<IProps> = async ({item}) => {
    return (
        <div className={styles.movieList}>
            <h2>{item.name}</h2>
            <PosterPreview imagePath={item.poster_path}/>
        </div>
    );
};

export default SearchCollectionMoviesList;

