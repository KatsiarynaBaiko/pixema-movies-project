// Поиск по нажатию на кнопку
// Логика: в инпуте пишем -> нажимаем на кнопку поиска -> dispatch в redux -> запрос на back-end -> ответ

// step 1 Lesson 49 onKeyDown
// функционал для поиска по нажатию на кнопочку (она может быть любой - Enter например)
// => идем в Header

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Title from "src/components/Title";
import EmptyState from "src/components/EmptyState";

import styles from "./Search.module.scss";
import { RoutesList } from "../Router";
import { getSearchedPosts, PostSelectors } from "src/redux/reducers/postSlice";
import { FilmTypes } from "src/@types";
import CardsList from "src/components/CardsList";


// step 6 необходимо отобразить посты на страничке => прописываем логику внутри return
// первоначально используем компонент Title, куда помещаем ${search} - сам запрос (то есть слова из поисковой строки)
// также нам нужен searchList => промапить массив в карточку + достать его из селектора с помощью useSelector
// так как мы мапим массив - не забываем ключ, иначе в console будет ошибка
// ключом является наш id =>  key={post.id}


const Search = () => {

    const { title } = useParams(); // search достаем из url через параметр title

    const navigate = useNavigate();  // если у нас search - underfind (нет его), то навигируем на Home. Если есть - запрос на сервер и dispatch
    const dispatch = useDispatch();
    const searchedPosts = useSelector(PostSelectors.getSearchedPosts); // достаем массив из селектора и мапим его в карточку


    useEffect(() => {
        if (!title) {
            navigate(RoutesList.Home);
        } else {
            // запрос на сервер и dispatch
            dispatch(getSearchedPosts(title));
        }
    }, [title]);


    return (
        <div>
            <Title title={`Search results: "${title}"`} />
            <div className={styles.container}>
                {searchedPosts.length ? (
                    <div>
                        {/* <CardsList cardsList={searchedPosts} isLoading={false}/> */}
                        <CardsList cardsList={searchedPosts} />
                    </div>

                ) : (
                    <EmptyState
                        title={"Nothing was found..."}
                        description={"Try another search request"}
                    />
                )
                }
            </div>
        </div>
    );
};

export default Search;