import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { PostSelectors } from "src/redux/reducers/postSlice";
import CardsList from "src/components/CardsList";

import styles from './Favourites.module.scss';


const Favourites = () => {

    const savedPosts = useSelector(PostSelectors.getSavedPosts);

    return (
        <div className={styles.container}>
            {/* <div className={styles.comingSoon}>Favourites: Coming soon ...</div>
            <CardsList cardsList={savedPosts}/> */}
        </div>
    )
}

export default Favourites