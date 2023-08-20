import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { PostSelectors } from "src/redux/reducers/postSlice";
import CardsList from "src/components/CardsList";
import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";
import EmptyState from "src/components/EmptyState";
import Pagination from "src/components/Pagination";

import styles from './Favourites.module.scss';



const Favourites = () => {

    const { themeValue } = useThemeContext();

    const savedPosts = useSelector(PostSelectors.getSavedPosts);
    const isListLoading = useSelector(PostSelectors.getPostsListLoading)


    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(10) // количество фильмов (карточек) на страничке

    const lastFilmIndex = currentPage * filmsPerPage
    const firstFilmIndex = lastFilmIndex - filmsPerPage
    const currentFilms = savedPosts.slice(firstFilmIndex, lastFilmIndex) //текущая страничка


    const paginate = (pageNumber: any) => setCurrentPage(pageNumber)


    return (

        <div className={styles.container}>
            {/* <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}>Favourites: Coming soon ...</div> */}

            {savedPosts.length ? (
                // <CardsList cardsList={savedPosts} isLoading={isListLoading} />
                <CardsList cardsList={currentFilms} isLoading={isListLoading} />

            ) : (
                <EmptyState
                    title={"Nothing was found..."}
                    description={"Please, visit anothe page and add to Favourites"}
                />
            )
            }

            <Pagination
                filmsPerPage={filmsPerPage}
                totalFilms={savedPosts.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Favourites