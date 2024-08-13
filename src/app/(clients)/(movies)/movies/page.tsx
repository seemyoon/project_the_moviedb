// import React from 'react';
// import PaginationComponent from "@/components/movies/PaginationComponent";
// import {movieService} from "@/services/api.service";
// import MoviesPaginationComponent from "@/components/movies/MoviesPaginationComponent";
//
//
// type SearchParamsType = Record<string, number | undefined>;
// const MoviesPage = async ({searchParams}: { searchParams: SearchParamsType }) => {
//
//     const pageParam = searchParams["page"];
//     const page = Number(pageParam) && Number(pageParam) > 0 ? Number(pageParam) : 1; //todo error and logic
//     const moviesPage = await movieService.moviesPage(page);
//
//     return (
//         <div>
//             <MoviesPaginationComponent
//
//
//                 items={moviesPage.results}/>
//             <PaginationComponent currentPage={moviesPage.page} endPage={moviesPage.total_pages}/>
//         </div>
//     );
// };
//
// export default MoviesPage;
import React from 'react';
import PaginationComponent from "@/components/movies/PaginationComponent";
import {movieService} from "@/services/api.service";
import MoviesPaginationComponent from "@/components/movies/MoviesPaginationComponent";


type SearchParamsType = Record<string, number | undefined>;
const MoviesPage = async ({searchParams}: { searchParams: SearchParamsType }) => {

    const pageParam = searchParams["page"];
    const page = Number(pageParam) && Number(pageParam) > 0 ? Number(pageParam) : 1; //todo error and logic
    const moviesPage = await movieService.moviesPage(page);

    return (
        <div>
            {moviesPage.results.map(value => <MoviesPaginationComponent key={value.id} item={value}/>)}
            <PaginationComponent currentPage={moviesPage.page} endPage={moviesPage.total_pages}/>
        </div>
    );
};

export default MoviesPage;
