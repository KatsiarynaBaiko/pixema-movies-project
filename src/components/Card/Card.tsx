import React, { FC } from "react";
import classNames from 'classnames';
import { useSelector } from "react-redux";

import { PostSelectors } from "src/redux/reducers/postSlice";
import { Post, Theme } from "src/@types";
import { AddFavouritesIcon, FavouritesIconBlank, TrendsIcon } from "src/assets/icons";
import { useThemeContext } from "src/context/Theme";

import styles from './Card.module.scss'



// первый апишник
type CardProps = {
    card: Post;
    classname?: string;
    onSavedClick?: () => void;
}

// у нас может не быть постера => проверяем через условный рендеринг
// также может не быть рейтинга => проверяем через условный рендеринг

//первый апишник
const Card: FC<CardProps> = ({ card, classname, onSavedClick }) => {

    const { themeValue } = useThemeContext();

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
                <div onClick={onSavedClick} className={classNames(styles.favouritesCard, {[styles.lightFavouritesCard] : themeValue === Theme.Light})}> 
                    {savedIndex > -1 ? <AddFavouritesIcon /> : <FavouritesIconBlank />}
                </div>
            </div>

            <div className={classNames(styles.name, {[styles.lightName] : themeValue === Theme.Light})}>{card.name}</div>
            <div className={styles.genre}>{card.genre}</div>

        </div>
    )
}


//второй апишник
// const Card: FC<CardProps> = ({ id, primaryImage, classname, titleText, onSavedClick }) => {

    // const savedPosts = useSelector(PostSelectors.getSavedPosts);
    // const savedIndex = savedPosts.findIndex((item) => item.id === id);

//     return (


//         <div className={styles.cardContainer}>

//             <div className={styles.cardPosterContent}>

//                 {primaryImage ? (
//                     <div className={styles.poster}>
//                         {primaryImage.map((primaryImage, index) => {
//                             return (
//                                 <div key={index} className={styles.poster}>
//                                     {primaryImage.url}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ) : (
//                     // <div className={styles.noPoster}>Sorry...No poster...</div>
//                     <div> <img src='https://gitu.net/gituimg/free-psd-mockups-download/Free-Pop-Corn-Box-Packaging-Mockup-PSD-Set-2.jpg' alt='Sorry...No poster..' className={styles.poster} /> </div>

//                 )}

//                 {/* <div onClick={onSavedClick} className={styles.favouritesCard}>
//                     {savedIndex > -1 ? <AddFavouritesIcon /> : <FavouritesIconBlank />}
//                 </div> */}
//                 <div className={styles.favouritesCard}>
//                     {<FavouritesIconBlank />}
//                 </div>
//             </div>

//             <div className={styles.name}>
//                 {titleText.map((titleText, index) => {
//                     return (
//                         <div key={index} className={styles.name}>
//                             {titleText.text}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     )
// }

export default Card