import React from "react";
import classNames from "classnames";
import { Theme } from "src/@types";
import { useThemeContext } from "src/context/Theme";

import styles from './Trends.module.scss';
import EmptyState from "src/components/EmptyState";


const Trends = () => {

    const { themeValue } = useThemeContext();
    
    return (
        <div className={styles.container}>
            {/* <div className={classNames(styles.comingSoon, {[styles.lightComingSoon] : themeValue === Theme.Light})}> Trends: Coming soon ...</div> */}
            <EmptyState
            title={"Coming soon..."}
            description={"Plese, visit another pages"}
          />
        </div>
    )
}

export default Trends