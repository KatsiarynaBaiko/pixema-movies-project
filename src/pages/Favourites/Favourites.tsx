import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { PostSelectors } from "src/redux/reducers/postSlice";
import CardsList from "src/components/CardsList";
import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from './Favourites.module.scss';
import EmptyState from "src/components/EmptyState";

const Favourites = () => {

    const { themeValue } = useThemeContext();

    const savedPosts = useSelector(PostSelectors.getSavedPosts);
    const isListLoading = useSelector(PostSelectors.getPostsListLoading)

    return (

        <div className={styles.container}>
            {/* <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}>Favourites: Coming soon ...</div> */}

            {savedPosts.length ? (
                <CardsList cardsList={savedPosts} isLoading={isListLoading} />
            ) : (
                <EmptyState
                    title={"Nothing was found..."}
                    description={"Please, visit anothe page and add to Favourites"}
                />
            )
            }
        </div>
    )
}

export default Favourites