import React, { FC } from "react";

import styles from './Username.module.scss';


type UsernameProps = {
    username: string;
};

// {username[0]} - так как по правилам нельзя написать имя и фамилию раздельно
// только через нижнее подчеркивание => берем первую букву
// нужна проверка, если нет Username

const Username: FC<UsernameProps> = ({ username }) => {

    if (!username) {
        return null
    }

    return (
        <div className={styles.container}>
            <div className={styles.initials}>{username[0]}</div>
            <div className={styles.username}>{username}</div>
        </div>
    )
}

export default Username