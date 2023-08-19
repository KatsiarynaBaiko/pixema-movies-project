import React, { useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { getTrendsPostsList, PostSelectors } from "src/redux/reducers/postSlice";
import CardsList from "src/components/CardsList";
import { Theme } from "src/@types";
import { useThemeContext } from "src/context/Theme";
import EmptyState from "src/components/EmptyState";

import styles from './Trends.module.scss';


const Trends = () => {

    const { themeValue } = useThemeContext();

    const dispatch = useDispatch()

    const trendsFilms = useSelector(PostSelectors.getTrendsPostsList)
    useEffect(() => {
        dispatch(getTrendsPostsList())
    }, [])

    const isListLoading = useSelector(PostSelectors.getTrendsPostsListLoading)

    return (
        <div className={styles.container}>
            {/* <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}> Trends: Coming soon ...</div> */}

            <CardsList cardsList={trendsFilms} />

            {/* <EmptyState
            title={"Coming soon..."}
            description={"Plese, visit another pages"}
          /> */}
        </div>
    )
}

export default Trends