import React, { FC } from "react";
import classNames from 'classnames';
import styles from './Card.module.scss'
import { Post } from "src/@types";
import { TrendsIcon } from "src/assets/icons";

type CardProps = {
    card: Post;
    classname?: string;
}

// у нас может не быть постера => проверяем через условный рендеринг
// также может не быть рейтинга => проверяем через условный рендеринг

const Card: FC<CardProps> = ({ card, classname }) => {

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
            </div>

            <div className={styles.name}>{card.name}</div>
            <div className={styles.genre}>{card.genre}</div>

        </div>
    )
}

export default Card