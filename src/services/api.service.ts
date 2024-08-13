import {AccessTokenAuth, urlBuilder} from "@/constants/urls";
import {IMoviesPaginationModel} from "@/models/movies/IMoviePaginationModel";
import {IMovie} from "@/models/movies/movie/IMovie";

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
    movieUrlById: async (id: number): Promise<IMovie> => {
        return await fetch(urlBuilder.movieUrl.movieUrlById(id), options)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

}
export {movieService};