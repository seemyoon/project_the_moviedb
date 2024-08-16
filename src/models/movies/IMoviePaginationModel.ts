import {IMovieList} from "@/models/movies/IMoviesList";

export interface IMoviesPaginationModel {
    results: IMovieList[]
    page: number
    total_pages: number
    total_results: number
}


