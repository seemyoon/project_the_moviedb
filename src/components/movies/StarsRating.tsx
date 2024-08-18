'use client';
import React, {FC} from 'react';
import dynamic from 'next/dynamic'

const DynamicStarRatings = dynamic(() => import('react-star-ratings'), {ssr: false});

type Props = {
    voteAverage: number
}

const StarsRating: FC<Props> = ({voteAverage}) => {
    const resultVoteAverage = voteAverage / 2;
    return (
        <div>
            <DynamicStarRatings
                rating={resultVoteAverage}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starSpacing="5px"
                starDimension="16px"
            />
        </div>
    );
};


export default StarsRating;