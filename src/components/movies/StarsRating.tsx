'use client';
import StarRatings from 'react-star-ratings';
import React, {FC} from 'react';

type Props = {
    voteAverage: number
}

const StarsRating: FC<Props> = ({voteAverage}) => {
    const normalizedRating = voteAverage / 2 // todo /fix stars
    return (
        <div>
            <StarRatings
                rating={normalizedRating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starSpacing="5px"
                starDimension="20px"
            />
        </div>
    );
};

export default StarsRating;