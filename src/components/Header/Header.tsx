import React, { useState } from "react"
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { PixemaLogoIcon, PixemaLogoLightIcon, SearchIcon } from "src/assets/icons";

import styles from './Header.module.scss';
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import Username from "../Username";
import { Theme } from "src/@types";


// отслеживаем есостояние интпута => используем useState
const Header = () => {
    const { themeValue } = useThemeContext();

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.header}>

            <div className={classNames(styles.pixemaLogo, { [styles.lightPixemaLogo]: themeValue === Theme.Light })}>
                <PixemaLogoIcon />
            </div>

            <Input
                className={classNames(styles.inputSearch)}
                placeholder='Search...'
                onChange={setInputValue}
                value={inputValue}
            />

            <Button
                type={ButtonTypes.Primary}
                title={<SearchIcon />}
                onClick={() => { }}
                className={styles.searchButton}
            />

            <div className={styles.userName}>
                <Username username={'Katsiaryna'} />
            </div>

        </div>
    )
}


// step 2
export default Header;