import React, { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { AddFavouritesIcon, FavouritesIconBlank, ShareIcon, TrendsIcon } from "src/assets/icons";
import ButtonGroup from "src/components/ButtonGroup";
import { getSinglePost, PostSelectors, setSavedStatus } from "src/redux/reducers/postSlice";
import { useThemeContext } from "src/context/Theme";
import { ButtonGroupTypes, FilmTypes, SaveStatus, Theme } from "src/@types";
import Loader from "src/components/Loader";
import ButtonGroupList from "src/components/ButtonGroupList";

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

    const { themeValue } = useThemeContext();

    // достаем id с помощью  useParams ()
    const { id } = useParams();

    const dispatch = useDispatch();

    const singlePost = useSelector(PostSelectors.getSinglePost);

    useEffect(() => {
        if (id) {
            dispatch(getSinglePost(id));
        }
    }, [id]);


    const isSinglePostLoading = useSelector(PostSelectors.getSinglePostLoading);

    // mapping жанров - отображаем через точечку
    const filmsGenres = singlePost?.genres?.genres.map(genre => genre.text).join(' • ');


    const savedPosts = useSelector(PostSelectors.getSavedPosts);
    const savedIndex = savedPosts.findIndex((item) => item.id === id);


    const onSavedStatus = (card: FilmTypes) => (status: SaveStatus) => {
        dispatch(setSavedStatus({ card, status }))
    }

    const [activeTab, setActiveTab] = useState(ButtonGroupTypes.Favourites);

    const onTabClick = (tab: ButtonGroupTypes) => () => {
        setActiveTab(tab);
        if (tab === ButtonGroupTypes.Favourites) {
            if (singlePost) {
                onSavedStatus(singlePost)(SaveStatus.Saved)
            }
        } else {
            return null
        }
    };

    const tabsList = useMemo(
        () => [
            {
                key: ButtonGroupTypes.Favourites,
                title: savedIndex === -1 ? <FavouritesIconBlank /> : <AddFavouritesIcon />
            },
            {
                key: ButtonGroupTypes.Share,
                title: <ShareIcon />
            },
        ],
        [savedIndex]
    );

    return (
        singlePost && !isSinglePostLoading ? (
            <div className={styles.container}>

                <div className={styles.containerLeft}>
                    <div className={styles.singleMoviePoster}>
                        {singlePost?.primaryImage?.url ? (
                            <div> <img src={singlePost?.primaryImage?.url} alt={singlePost?.titleText?.text} className={styles.poster} /> </div>
                        ) : (
                            <div> <img src='https://gitu.net/gituimg/free-psd-mockups-download/Free-Pop-Corn-Box-Packaging-Mockup-PSD-Set-2.jpg' alt='Sorry...No poster..' className={styles.poster} /> </div>
                        )}
                    </div>

                    {/* <ButtonGroup /> */}
                    <ButtonGroupList
                        tabsList={tabsList}
                        activeTab={activeTab}
                        onTabClick={onTabClick} />
                </div>

                <div className={styles.singleMovieInfo}>

                    {/* <div className={styles.genre}>{'History movies'}</div> */}
                    <div className={styles.genre}>{filmsGenres}</div>
                    <div className={classNames(styles.name, { [styles.lightTitle]: themeValue === Theme.Light })}>{singlePost?.titleText?.text}</div>

                    <div className={styles.ratingContainer}>

                        <div className={classNames(styles.rating, {})}>
                            {/* <div className={styles.ratingScore}>{'9'} <TrendsIcon /> </div> */}
                            {singlePost?.ratingsSummary?.aggregateRating ? (
                                <div
                                    className={classNames(styles.rating, {
                                        [styles.ratingOrange]: singlePost?.ratingsSummary?.aggregateRating <= 4,
                                        [styles.ratingYellow]: singlePost?.ratingsSummary?.aggregateRating > 4 && singlePost?.ratingsSummary?.aggregateRating < 7,
                                        [styles.ratingGreen]: singlePost?.ratingsSummary?.aggregateRating >= 7,

                                    })}
                                >
                                    {singlePost?.ratingsSummary?.aggregateRating >= 7 ? <TrendsIcon /> : ''}
                                    {singlePost?.ratingsSummary?.aggregateRating}
                                </div>
                            ) : ''}
                            <div className={classNames(styles.imdb_id, { [styles.lightImdb_id]: themeValue === Theme.Light })}>{'IMDb 7.6'}</div>
                            {/* <div className={classNames(styles.runtime, { [styles.lightRuntime]: themeValue === Theme.Light })}>{'130 min'}</div> */}
                            <div className={classNames(styles.runtime, { [styles.lightRuntime]: themeValue === Theme.Light })}>
                                {singlePost?.runtime ? (
                                    singlePost?.runtime?.seconds / 60 + ' min'
                                ) :
                                    'Not found min'
                                }
                            </div>
                        </div>
                    </div>


                    {/* <div className={classNames(styles.description, { [styles.lightDescription]: themeValue === Theme.Light })}>{'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord.'}</div> */}
                    <div className={classNames(styles.description, { [styles.lightDescription]: themeValue === Theme.Light })}>
                        {/* {singlePost?.plot?.plotText?.plainText } */}
                        {singlePost?.plot?.plotText ? (
                            singlePost?.plot?.plotText?.plainText
                        ) :
                            'Description Not found'}
                    </div>

                    <div className={styles.descriptionInfo}>
                        <ul className={classNames(styles.descriptionInfoLeft, { [styles.lightDescriptionInfoLeft]: themeValue === Theme.Light })}>
                            <li>Year</li>
                            <li>Released</li>
                            <li>BoxOffice</li>
                            <li>Country</li>
                            <li>Production</li>
                            <li>Actors</li>
                            <li>Director</li>
                            <li>Writers</li>
                        </ul>
                        <ul className={classNames(styles.descriptionInfoRight, { [styles.lightDescriptionInfoRight]: themeValue === Theme.Light })}>
                            <li>{singlePost?.releaseYear?.year}</li>
                            {/* <li>{singlePost?.releaseDate?.day + '.' + singlePost?.releaseDate?.month + '.' + singlePost?.releaseDate?.year}</li> */}
                            <li>{singlePost?.releaseDate ? singlePost?.releaseDate?.day + '.' + singlePost?.releaseDate?.month + '.' + singlePost?.releaseDate?.year : singlePost?.releaseYear?.year}</li>
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
        ) : (<Loader />)
    )
}

export default SelectedPost
