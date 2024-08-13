const baseUrl = "https://api.themoviedb.org/3";
const AccessTokenAuth = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThjZGMwM2Y5Y2NiMGIyNTI1YzRiNTEzMWUyNDAzMyIsIm5iZiI6MTcyMzUzMTc2My41NDM1OTgsInN1YiI6IjY2YjY2YTNiZGU4OWQxNzgyOGZmZTc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAIAoBoiXe5On3LcJyhq8_vpJnK2aCmCwvM9RLLB2HU"
const urlBuilder = {
    movieUrl:
        {
            moviesUrlList: (page: number) => baseUrl + "/movie/changes?page=" + page,
            movieUrlById: (id: number) => baseUrl + "/movie/" + id,

        }

}
export {urlBuilder, baseUrl, AccessTokenAuth}