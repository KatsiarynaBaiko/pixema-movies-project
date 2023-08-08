
import React, { FC } from "react";
import { PostsList } from "src/@types";
import Card from "../Card/Card";
import styles from './CardsList.module.scss';


type CardsListProps = {
    cardsList: PostsList;
    isLoading?: boolean;
}

// если не прогрузились посты: нужна проверка 
// => условие return cardsList.length && cardsList.length > 0 ? (..показать верстку..) : null
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