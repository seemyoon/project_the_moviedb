import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import {IMoviesList} from "@/models/movies/IMoviesList";
import defaultImage from "@/img/Image-Coming-Soon.png";
import {tmdbConfig} from "@/tmdbConfig";
import Image from "next/image";

interface IProps {
    item: IMoviesList
}

const MoviesPaginationComponent: FC<IProps> = async ({item}) => {
    const movieFromList = await movieService.movieUrlById(item.id)

    const defaultImageWidth = Number((tmdbConfig.poster_sizes[2]).substring(1, 4)) // remove letter "w";
    const defaultImageHeight = defaultImageWidth * 1.5; // so that the photo from API and Image-Coming-Soon.png are the same size

    const pictureMovie = movieFromList.poster_path
        ? `${tmdbConfig.secure_base_url}${tmdbConfig.poster_sizes[2]}${movieFromList.poster_path}`
        : defaultImage.src;

    return (
        <div>
            <h2>{movieFromList.title}</h2>
            <p>{movieFromList.id}</p>
            <Image src={pictureMovie}
                   alt={movieFromList.title || "Image coming soon"}
                   width={defaultImageWidth}
                   height={defaultImageHeight}
            />
        </div>
    );
}

export default MoviesPaginationComponent;
