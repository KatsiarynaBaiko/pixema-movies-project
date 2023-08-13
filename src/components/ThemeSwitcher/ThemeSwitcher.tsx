import React, { FC } from "react";
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from './ThemeSwitcher.module.scss';
import { MoonIcon, SunIcon } from "src/assets/icons";


type ThemeSwitcherProps = {
    titleSun?: string;
    titleMoon?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ titleSun, titleMoon }) => {
    const { themeValue, onChangeTheme } = useThemeContext();

    return (

        <div className={styles.container}>
            <div className={styles.buttonSun}>
                <div className={styles.title}>{titleSun}</div>
                <div className={classNames(styles.button,
                    { [styles.activeButton]: themeValue === Theme.Light })}
                    onClick={onChangeTheme(Theme.Light)}
                >
                    <SunIcon />
                </div>
            </div>

            <div className={styles.buttonMoon}>
                <div className={styles.title}>{titleMoon}</div>
                <div className={classNames(styles.button,
                    { [styles.activeButton]: themeValue === Theme.Dark })}
                    onClick={onChangeTheme(Theme.Dark)}
                >
                    <MoonIcon />
                </div>
            </div>
        </div>
    );
};


export default ThemeSwitcher
