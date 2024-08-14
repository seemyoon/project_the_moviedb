import React, {FC} from 'react';
import Image from "next/image";
import {tmdbConfig} from "@/tmdbConfig";
import defaultImage from "@/img/Image-Coming-Soon.png";

interface IProps {
    imagePath: string
    size: number
}

const PosterPreview: FC<IProps> = ({imagePath, size}) => {

    const defaultImageWidth = Number((tmdbConfig.poster_sizes[size]).substring(1, 4)) // remove letter "w";
    const defaultImageHeight = defaultImageWidth * 1.5; // so that the photo from API and Image-Coming-Soon.png are
    // the same size

    const pictureMovie = imagePath
        ? `${tmdbConfig.secure_base_url}${tmdbConfig.poster_sizes[size]}${imagePath}`
        : defaultImage.src;
    return (
        <div>
            <Image src={pictureMovie}
                   alt={"Image coming soon"}
                   width={defaultImageWidth}
                   height={defaultImageHeight}
            />
        </div>
    );
};

export default PosterPreview;