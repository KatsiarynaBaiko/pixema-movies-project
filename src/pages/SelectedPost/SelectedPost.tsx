import React, { FC } from "react";
import classNames from "classnames";
import { FavouritesIcon, TrendsIcon } from "src/assets/icons";

import ButtonGroup from "src/components/ButtonGroup";

import styles from './SelectedPost.module.scss';

// первый апишник
// type SelectedPostProps = {
//     classname?: string;
//     id?: number;
//     poster?: string;
//     genre?: string;
//     name?: string;
//     rating?: number;
//     imdb_id?: string;
//     runtime?: string;
//     description?: string;
//     year?: string;
//     release_date?: string;
//     revenue?: string;
//     country?: string;
//     production?: string;
//     actors?: string;
//     director?: string;
//     writers?: string;
// };

// первый апишник
// const SelectedPost: FC<SelectedPostProps> = ({ classname, id, poster, genre, name, rating, imdb_id, runtime, description, year, release_date, revenue, country, production, actors, director, writers }) => {

//     return (
//         <div className={styles.container}>

//             <div className={styles.containerLeft}>
//                 <div className={styles.singleMoviePoster}>
//                     {poster ? (
//                         <div> <img src={poster} alt={name} className={styles.poster} /> </div>
//                     ) : (
//                         <div> <img src='https://gitu.net/gituimg/free-psd-mockups-download/Free-Pop-Corn-Box-Packaging-Mockup-PSD-Set-2.jpg' alt='Sorry...No poster..' className={styles.poster} /> </div>
//                     )}
//                 </div>
//                 <ButtonGroup />
//             </div>


//             <div className={styles.singleMovieInfo}>

//                 <div className={styles.genre}>{genre}</div>
//                 <div className={styles.name}>{name}</div>

//                 <div className={styles.ratingContainer}>
//                     {rating ? (
//                         <div
//                             className={classNames(styles.rating, {
//                                 [styles.ratingOrange]: rating <= 4,
//                                 [styles.ratingYellow]: rating > 4 && rating < 7,
//                                 [styles.ratingGreen]: rating >= 7,

//                             })}
//                         >
//                             {rating >= 7 ? <TrendsIcon /> : ''}
//                             {rating}
//                         </div>
//                     ) : ''}
//                     <div className={styles.imdb_id}>{imdb_id}</div>
//                     <div className={styles.runtime}>{runtime}</div>
//                 </div>

//                 <div className={styles.description}>{description}</div>

//                 <div className={styles.descriptionInfo}>
//                     <ul className={styles.descriptionInfoLeft}>
//                         <li>Year</li>
//                         <li>Released</li>
//                         <li>BoxOffice</li>
//                         <li>Country</li>
//                         <li>Production</li>
//                         <li>Actors</li>
//                         <li>Director</li>
//                         <li>Writers</li>
//                     </ul>
//                     <ul className={styles.descriptionInfoRight}>
//                         <li>{year}</li>
//                         <li>{release_date}</li>
//                         <li>{revenue}</li>
//                         <li>{country}</li>
//                         <li>{production}</li>
//                         <li>{actors}</li>
//                         <li>{director}</li>
//                         <li>{writers}</li>
//                     </ul>
//                 </div>
//             </div>


//             {/* <div className={styles.recommendationsContainer}>
//                 <div className={styles.recommendationsText}></div>
//                 <div className={styles.recommendationsCard}></div>
//             </div> */}
//         </div>
//     )
// }

// второй апишник
const SelectedPost = () => {

    return (
        <div className={styles.container}>

            <div className={styles.containerLeft}>
                <div className={styles.singleMoviePoster}>
                    {/* {primaryImage?.url ? (
                        <div> <img src={primaryImage?.url} alt={titleText.text} className={styles.poster} /> </div>
                    ) : (
                        <div> <img src='https://gitu.net/gituimg/free-psd-mockups-download/Free-Pop-Corn-Box-Packaging-Mockup-PSD-Set-2.jpg' alt='Sorry...No poster..' className={styles.poster} /> </div>
                    )} */}
                </div>
                <ButtonGroup />
            </div>


            <div className={styles.singleMovieInfo}>

                <div className={styles.genre}>{'Histore movies'}</div>
                {/* <div className={classNames(styles.name, { })}>{titleText.text}</div> */}

                <div className={styles.ratingContainer}>

                    <div className={classNames(styles.rating, {})}>
                        {'7'}
                        <TrendsIcon />
                    </div>

                    <div className={styles.imdb_id}>{'IMDb 7.6'}</div>
                    <div className={styles.runtime}>{'130 min'}</div>
                </div>

                <div className={styles.description}>{'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord.'}</div>

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
                        <li>{'2011'}</li>
                        <li>{'15 Jul 2011'}</li>
                        <li>{'$381,409,310'}</li>
                        <li>{'United Kingdom, United States'}</li>
                        <li>{'Heyday Films, Moving Picture Company, Warner Bros.'}</li>
                        <li>{'Daniel Radcliffe, Emma Watson, Rupert Grint'}</li>
                        <li>{'David Yates'}</li>
                        <li>{'J.K. Rowling, Steve Kloves'}</li>
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
