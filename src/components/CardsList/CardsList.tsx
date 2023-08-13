
import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { Post, PostsList } from "src/@types";
import { setSavedStatus } from "src/redux/reducers/postSlice";

import styles from './CardsList.module.scss';
import Card from "../Card/Card";




// первый апишник
type CardsListProps = {
    cardsList: PostsList;
    isLoading?: boolean;
}

// первый апишник
// если не прогрузились посты: нужна проверка 
// => условие return cardsList.length && cardsList.length > 0 ? (..показать верстку..) : null
// не забываем прописать key (всегда), если мапим список key={card.id}
const CardsList: FC<CardsListProps> = ({ cardsList, isLoading }) => {

    const dispatch = useDispatch();

    const onSavedClick = (card: Post) => () => {
        dispatch(setSavedStatus({ card }))
    }

    return cardsList && cardsList.length > 0 ? (

        <div className={styles.container}>
            {cardsList.map((card) => {
                return <Card card={card} key={card.id} onSavedClick={onSavedClick(card)}/>
            })}
        </div>
    ) : null
}



//второй апишник

// type CardList = CardProps[];

// type CardsListProps = {
//   cardsList: CardList;
//   isLoading?: boolean;
// };

// const CardsList: FC<CardsListProps> = ({ cardsList, isLoading }) => {

//     // const dispatch = useDispatch();

//     // const onSavedClick = (card: Post) => () => {
//     //     dispatch(setSavedStatus({ card }))
//     // }

//     return cardsList && cardsList.length > 0 ? (

//         <div className={styles.container}>
//             {cardsList.map((card, index) => {
//                 return <Card 
//                     key={index}
//                     primaryImage={card.primaryImage}
//                     titleText={card.titleText}           
//                     // onSavedClick={onSavedClick(card)}
//                 />
//             })}
//         </div>
//     ) : null
// }

export default CardsList