import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import {urlBuilder} from "@/constants/urls";
import styles from "./TrailerMovieStyles.module.css"
interface IProps {
    getTrailerKey: string
}

const TrailerMovieComponent: FC<IProps> = ({getTrailerKey}) => {
    return (
        <Container>
            <div className={styles.videoContainer}>
                <iframe
                    src={urlBuilder.trailerFromYouTube(getTrailerKey)}
                    title="YouTube video"
                    allowFullScreen
                />
            </div>
        </Container>
    );
};

export default TrailerMovieComponent;
