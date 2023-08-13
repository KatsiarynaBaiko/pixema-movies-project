import React from "react";
import classNames from "classnames";

import styles from './MySettings.module.scss';
import ThemeSwitcher from "src/components/ThemeSwitcher";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";
import Title from "src/components/Title";



const MySettings = () => {

    return (
        <div className={styles.container}>

            <div className={styles.title}><Title title={"Choose your Theme:"}/></div>

            <ThemeSwitcher titleSun={"Use light thema"} titleMoon={"Use dark thema"} />

        </div>
    )
}




export default MySettings