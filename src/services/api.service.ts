import {AccessTokenAuth, urlBuilder} from "@/constants/urls";
import {IMoviesPaginationModel} from "@/models/movies/IMoviePaginationModel";
import {IMovie} from "@/models/movie/IMovie";
import {IGenre} from "@/models/movie/IGenre";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessTokenAuth}`
    }
};

const movieService = {
    getMovieWithGenres: async (genreId: string, page: string): Promise<IMoviesPaginationModel> => {
        return await fetch(urlBuilder.movieUrl.getMovieWithGenres(genreId, page), options)
            .then(response => response.json())
            .catch(err => console.error(err));
    },
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
    getSearchResults: async (query: string): Promise<IMoviesPaginationModel> => {
        return await fetch(urlBuilder.searchFilm(query), options)
            .then(response => response.json())
            .catch(err => console.error(err));
    }
}

export {movieService, searchResults};