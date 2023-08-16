import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { PostSelectors } from "src/redux/reducers/postSlice";
import CardsList from "src/components/CardsList";
import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from './Favourites.module.scss';

const Favourites = () => {

    const { themeValue } = useThemeContext();

    const savedPosts = useSelector(PostSelectors.getSavedPosts);
    const isListLoading = useSelector(PostSelectors.getPostsListLoading)
    
    return (
        <div className={styles.container}>
            <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}>Favourites: Coming soon ...</div>
            <CardsList cardsList={savedPosts} isLoading={isListLoading}/>
        </div>
    )
}

export default Favourites