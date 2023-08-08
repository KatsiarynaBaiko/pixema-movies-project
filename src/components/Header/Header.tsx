import classNames from "classnames";
import React, { useState } from "react"
import { PixemaLogoIcon, SearchIcon } from "src/assets/icons";
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import Username from "../Username";
import styles from './Header.module.scss';


// отслеживаем есостояние интпута => используем useState
const Header = () => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.header}>

            <div className={styles.pixemaLogo}>
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