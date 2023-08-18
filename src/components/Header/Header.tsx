import React, { useState } from "react"
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";
import { PixemaLogoIcon, PixemaLogoLightIcon, SearchIcon } from "src/assets/icons";
import { clearSearchedPosts } from "src/redux/reducers/postSlice";

import styles from './Header.module.scss';
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import Username from "../Username";


// отслеживаем есостояние интпута => используем useState
const Header = () => {
    const { themeValue } = useThemeContext();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');


    const handleSearchOpened = () => {
        if ( inputValue) {
            dispatch(clearSearchedPosts());
            navigate(`/titles/search/title/${inputValue}`);
            setInputValue("");
        }
    };

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
                // onClick={() => { }}
                 onClick={handleSearchOpened}
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