import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { getTrendsPostsList, PostSelectors } from "src/redux/reducers/postSlice";
import CardsList from "src/components/CardsList";
import { Theme } from "src/@types";
import { useThemeContext } from "src/context/Theme";
import EmptyState from "src/components/EmptyState";

import styles from './Trends.module.scss';
import Pagination from "src/components/Pagination";


const Trends = () => {

    const { themeValue } = useThemeContext();

    const dispatch = useDispatch()

    const trendsFilms = useSelector(PostSelectors.getTrendsPostsList)
    useEffect(() => {
        dispatch(getTrendsPostsList())
    }, [])

    const isListLoading = useSelector(PostSelectors.getTrendsPostsListLoading)


    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(10) // количество фильмов (карточек) на страничке

    const lastFilmIndex = currentPage * filmsPerPage
    const firstFilmIndex = lastFilmIndex - filmsPerPage
    const currentFilms = trendsFilms.slice(firstFilmIndex, lastFilmIndex) //текущая страничка

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

    return (
        <div className={styles.container}>
            {/* <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}> Trends: Coming soon ...</div> */}
            {trendsFilms.length ? (
                // <CardsList cardsList={trendsFilms} isLoading={isListLoading} />
                <CardsList cardsList={currentFilms} isLoading={isListLoading} />
            ) : (
                <EmptyState
                    title={"Coming soon..."}
                    description={"Plese, visit another pages"}
                />
            )
            }
            <Pagination
                filmsPerPage={filmsPerPage}
                totalFilms={trendsFilms.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Trends