import {tmdbConfig} from "@/tmdbConfig";

const baseUrl = "https://api.themoviedb.org/3";
const AccessTokenAuth = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThjZGMwM2Y5Y2NiMGIyNTI1YzRiNTEzMWUyNDAzMyIsIm5iZiI6MTcyMzU2NzE5Mi4zNzIyMDUsInN1YiI6IjY2YjY2YTNiZGU4OWQxNzgyOGZmZTc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gor1l2vn589tVqmvtWPWnpkl6UbwvPjNpHPd74FutXU"
const urlBuilder = {
    movieUrl:
        {
            moviesUrlList: (page: number) => baseUrl + "/discover/movie?page=" + page,
            movieUrlById: (id: string | number) => baseUrl + "/movie/" + id,
            genresUrlList: () => baseUrl + "/genre/movie/list",
        },
    logoUrl: tmdbConfig.secure_base_url + tmdbConfig.logo_sizes[2] + "/tUkNOAjyTt9D56DUeQfmmAFvwYQ.png",
    searchFilm: (queryValue: string) => baseUrl + "/search/collection?query=" + queryValue
}

export {urlBuilder, baseUrl, AccessTokenAuth}