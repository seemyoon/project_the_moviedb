import {IMoviesList} from "@/models/movies/IMoviesList";

export interface IMoviesPaginationModel {
    results: IMoviesList[]
    page: number
    total_pages: number
    total_results: number
}


