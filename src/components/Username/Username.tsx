import React, { FC } from "react";
import classNames from "classnames";

import { Theme } from "src/@types";
import { useThemeContext } from "src/context/Theme";

import styles from './Username.module.scss';


type UsernameProps = {
    username: string;
};

// {username[0]} - так как по правилам нельзя написать имя и фамилию раздельно
// только через нижнее подчеркивание => берем первую букву
// нужна проверка, если нет Username

const Username: FC<UsernameProps> = ({ username }) => {
    
    const { themeValue } = useThemeContext();

    if (!username) {
        return null
    }

    return (
        <div className={styles.container}>
            <div className={styles.initials}>{username[0]}</div>
            <div className={classNames(styles.username, {[styles.lightUsername] : themeValue === Theme.Light})}>{username}</div>
        </div>
    )
}

export default Username