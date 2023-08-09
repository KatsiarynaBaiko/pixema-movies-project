
import React, { FC } from "react";

import { PostsList } from "src/@types";

import styles from './CardsList.module.scss';
import Card from "../Card/Card";


type CardsListProps = {
    cardsList: PostsList;
    isLoading?: boolean;
}

// если не прогрузились посты: нужна проверка 
// => условие return cardsList.length && cardsList.length > 0 ? (..показать верстку..) : null
// не забываем прописать key (всегда), если мапим список key={card.id}
const CardsList: FC<CardsListProps> = ({ cardsList, isLoading }) => {

    return cardsList && cardsList.length > 0 ? (

        <div className={styles.container}>
            {cardsList.map((card) => {
                return <Card card={card} key={card.id} />
            })}
        </div>
    ) : null
}

export default CardsList