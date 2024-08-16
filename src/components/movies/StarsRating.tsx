'use client';
import StarRatings from 'react-star-ratings';
import React, {Component} from 'react';

type Props = {
    initialState?: number
}
type StarsRatingState = {
    rating: number
}

class StarsRating extends Component<Props, StarsRatingState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            rating: 0
        }
        this.changeRating = this.changeRating.bind(this) // todo take a note and repeat code
    }

    changeRating(newRating: number) {
        this.setState({
            rating: newRating
        })
    }

    render() {
        return (
            <StarRatings
                rating={this.state.rating}
                starRatedColor="gold"
                changeRating={this.changeRating}
                numberOfStars={6}
                name="rating"
                starSpacing="5px"
                starDimension="20px"
            />
        );
    }
}

export default StarsRating