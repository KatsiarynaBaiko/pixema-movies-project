
import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { FilmsListTypes, FilmTypes, Post, PostsList, SaveStatus } from "src/@types";
import { setSavedStatus } from "src/redux/reducers/postSlice";

import styles from './CardsList.module.scss';
import Card from "../Card/Card";
import Loader from "../Loader";
import EmptyState from "../EmptyState";




// первый апишник
// type CardsListProps = {
//     cardsList: PostsList;
//     isLoading?: boolean;
// }

// первый апишник
// если не прогрузились посты: нужна проверка 
// => условие return cardsList.length && cardsList.length > 0 ? (..показать верстку..) : null
// не забываем прописать key (всегда), если мапим список key={card.id}
// const CardsList: FC<CardsListProps> = ({ cardsList, isLoading }) => {

//     const dispatch = useDispatch();

//     const onSavedClick = (card: Post) => () => {
//         dispatch(setSavedStatus({ card }))
//     }

//     return cardsList && cardsList.length > 0 ? (

//         <div className={styles.container}>
//             {cardsList.map((card) => {
//                 return <Card card={card} key={card.id} onSavedClick={onSavedClick(card)}/>
//             })}
//         </div>
//     ) : null
// }



//второй апишник

type CardsListProps = {
    cardsList: FilmsListTypes;
    isLoading?: boolean;

}
const CardsList: FC<CardsListProps> = ({ cardsList, isLoading }) => {

    const dispatch = useDispatch();

    // const onSavedClick = (card: FilmTypes) => () => {
    //     dispatch(setSavedStatus({ card }))
    // }

    const onSavedStatus = (card: FilmTypes) => (status: SaveStatus) => {
        dispatch(setSavedStatus({ card, status }))
    }

    // if (isLoading) {
    //     return <Loader />
    // }

    return cardsList.length && !isLoading ? (
        <div className={styles.container}>

            {cardsList.map((el) => {

                return <Card
                    key={el.id}
                    {...el}
                    onSavedClick={onSavedStatus(el)}
                />
            })
            }
        </div>
    ) : (<Loader />);
    // ) : (
    //     <EmptyState
    //         title={"Nothing was found..."}
    //         description={"Try to add new post"}
    //     />
    // );
}

export default CardsList
