import React, { FC } from "react";
import classNames from 'classnames';
import { useSelector } from "react-redux";

import { PostSelectors } from "src/redux/reducers/postSlice";
import { Post } from "src/@types";
import { AddFavouritesIcon, FavouritesIconBlank, TrendsIcon } from "src/assets/icons";

import styles from './Card.module.scss'



type CardProps = {
    card: Post;
    classname?: string;
    onSavedClick?: () => void;
}

// у нас может не быть постера => проверяем через условный рендеринг
// также может не быть рейтинга => проверяем через условный рендеринг

const Card: FC<CardProps> = ({ card, classname, onSavedClick }) => {

    const savedPosts = useSelector(PostSelectors.getSavedPosts);
    const savedIndex = savedPosts.findIndex((item) => item.id === card.id);


    return (


        <div className={styles.cardContainer}>

            <div className={styles.cardPosterContent}>
                {card.poster ? (
                    <div> <img src={card.poster} alt={card.name} className={styles.poster} /> </div>
                ) : (
                    // <div className={styles.noPoster}>Sorry...No poster...</div>
                    <div> <img src='https://gitu.net/gituimg/free-psd-mockups-download/Free-Pop-Corn-Box-Packaging-Mockup-PSD-Set-2.jpg' alt='Sorry...No poster..' className={styles.poster} /> </div>

                )}

                {card.rating ? (
                    <div
                        className={classNames(styles.rating, {
                            [styles.ratingOrange]: card.rating <= 4,
                            [styles.ratingYellow]: card.rating > 4 && card.rating < 7,
                            [styles.ratingGreen]: card.rating >= 7,

                        })}
                    >
                        {card.rating >= 7 ? <TrendsIcon /> : ''}
                        {card.rating}
                    </div>
                ) : ''}

                <div onClick={onSavedClick} className={styles.favouritesCard}> 
                    {savedIndex > -1 ? <AddFavouritesIcon /> : <FavouritesIconBlank />}
                </div>
            </div>

            <div className={styles.name}>{card.name}</div>
            <div className={styles.genre}>{card.genre}</div>

        </div>
    )
}

export default Card