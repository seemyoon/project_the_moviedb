import {ISearchCollectionResult} from "@/models/movies/searchMovies/ISearchCollectionResult";

export interface ISearchCollection {
    page: number
    results: ISearchCollectionResult[]
    total_pages: number
    total_results: number
}

