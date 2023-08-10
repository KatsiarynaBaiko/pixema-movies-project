import React, { FC } from "react";
import classNames from "classnames";
import { TrendsIcon } from "src/assets/icons";

import ButtonGroup from "src/components/ButtonGroup";

import styles from './SelectedPost.module.scss';


type SelectedPostProps = {
    classname?: string;
    id?: number;
    poster?: string;
    genre?: string;
    name?: string;
    rating?: number;
    imdb_id?: string;
    runtime?: string;
    description?: string;
    year?: string;
    release_date?: string;
    revenue?: string;
    country?: string;
    production?: string;
    actors?: string;
    director?: string;
    writers?: string;
};

const SelectedPost: FC<SelectedPostProps> = ({ classname, id, poster, genre, name, rating, imdb_id, runtime, description, year, release_date, revenue, country, production, actors, director, writers }) => {

    return (
        <div className={styles.container}>

            <div className={styles.containerLeft}>
                <div className={styles.singleMoviePoster}>
                    {poster ? (
                        <div> <img src={poster} alt={name} className={styles.poster} /> </div>
                    ) : (
                        <div> <img src='https://gitu.net/gituimg/free-psd-mockups-download/Free-Pop-Corn-Box-Packaging-Mockup-PSD-Set-2.jpg' alt='Sorry...No poster..' className={styles.poster} /> </div>
                    )}
                </div>
                <ButtonGroup />
            </div>


            <div className={styles.singleMovieInfo}>

                <div className={styles.genre}>{genre}</div>
                <div className={styles.name}>{name}</div>

                <div className={styles.ratingContainer}>
                    {rating ? (
                        <div
                            className={classNames(styles.rating, {
                                [styles.ratingOrange]: rating <= 4,
                                [styles.ratingYellow]: rating > 4 && rating < 7,
                                [styles.ratingGreen]: rating >= 7,

                            })}
                        >
                            {rating >= 7 ? <TrendsIcon /> : ''}
                            {rating}
                        </div>
                    ) : ''}
                    <div className={styles.imdb_id}>{imdb_id}</div>
                    <div className={styles.runtime}>{runtime}</div>
                </div>

                <div className={styles.description}>{description}</div>

                <div className={styles.descriptionInfo}>
                    <ul className={styles.descriptionInfoLeft}>
                        <li>Year</li>
                        <li>Released</li>
                        <li>BoxOffice</li>
                        <li>Country</li>
                        <li>Production</li>
                        <li>Actors</li>
                        <li>Director</li>
                        <li>Writers</li>
                    </ul>
                    <ul className={styles.descriptionInfoRight}>
                        <li>{year}</li>
                        <li>{release_date}</li>
                        <li>{revenue}</li>
                        <li>{country}</li>
                        <li>{production}</li>
                        <li>{actors}</li>
                        <li>{director}</li>
                        <li>{writers}</li>
                    </ul>
                </div>
            </div>


            {/* <div className={styles.recommendationsContainer}>
                <div className={styles.recommendationsText}></div>
                <div className={styles.recommendationsCard}></div>
            </div> */}
        </div>
    )
}

export default SelectedPost
