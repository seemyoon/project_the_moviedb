import React, {FC} from 'react';
import styles from "@/app/(clients)/(movies)/movies/page.module.css";
import MoviesListCard from "@/components/movies/movieList/MoviesListCard";

type IProps = {
    itemId: number
}
const SearchCollectionMoviesList: FC<IProps> = async ({itemId}) => {
    return (
        <div className={styles.moviesPage}>
           <MoviesListCard itemId={itemId} />
        </div>
    );
};

export default SearchCollectionMoviesList;


