import {AccessTokenAuth, urlBuilder} from "@/constants/urls";
import {IMoviesPaginationModel} from "@/models/movies/IMoviePaginationModel";
import {IMovie} from "@/models/movies/movie/IMovie/IMovie";
import {IGenre} from "@/models/movies/movie/IMovie/IGenre";
import {ISearchCollection} from "@/models/movies/searchMovies/ISearchCollection";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessTokenAuth}`
    }
};

const movieService = {
    moviesPage: async (page: number): Promise<IMoviesPaginationModel> => {
        return await fetch(urlBuilder.movieUrl.moviesUrlList(page), options)
            .then(response => response.json())
            .catch(err => console.error(err));
    },
    movieUrlById: async (id: string | number): Promise<IMovie> => {
        return await fetch(urlBuilder.movieUrl.movieUrlById(id), options)
            .then(response => response.json())
            .catch(err => console.error(err));
    },
    getGenres: async (): Promise<IGenre[]> => {
        return await fetch(urlBuilder.movieUrl.genresUrlList(), options)
            .then(response => response.json())
            .then(value => value.genres)
            .catch(err => console.error(err));
    }
}
const searchResults = {
    getCollection: async (query: string ): Promise<ISearchCollection> => {
        return await fetch(urlBuilder.searchFilm(query), options)
            .then(response => response.json())
            .catch(err => console.error(err));
    }
}

export {movieService, searchResults};