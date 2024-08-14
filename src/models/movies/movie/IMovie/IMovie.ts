import {IGenre} from "@/models/movies/movie/IMovie/IGenre";

export interface IMovie {
    adult: boolean
    budget: number
    genres: IGenre[]
    id: number
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    runtime: number
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}










