import {ISearchCollectionResult} from "@/models/searchMovies/ISearchCollectionResult";

export interface ISearchCollection {
    page: number
    results: ISearchCollectionResult[]
    total_pages: number
    total_results: number
}

