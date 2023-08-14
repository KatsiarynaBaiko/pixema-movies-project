import React from "react";
import classNames from "classnames";
import { Theme } from "src/@types";
import { useThemeContext } from "src/context/Theme";

import styles from './Trends.module.scss';


const Trends = () => {

    const { themeValue } = useThemeContext();
    
    return (
        <div className={styles.container}>
            <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}> Trends: Coming soon ...</div>
        </div>
    )
}

export default Trends