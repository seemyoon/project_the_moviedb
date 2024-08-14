import {IMovie} from "@/models/movies/movie/IMovie/IMovie";

export interface IMoviesPaginationModel {
    results: IMovie[]
    page: number
    total_pages: number
    total_results: number
}


