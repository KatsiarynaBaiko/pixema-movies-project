// Поиск по нажатию на кнопку
// Логика: в инпуте пишем -> нажимаем на кнопку поиска -> dispatch в redux -> запрос на back-end -> ответ

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Title from "src/components/Title";
import EmptyState from "src/components/EmptyState";
import CardsList from "src/components/CardsList";
import Loader from "src/components/Loader";
import Pagination from "src/components/Pagination";

import styles from "./Search.module.scss";
import { RoutesList } from "../Router";
import { getSearchedPosts, PostSelectors } from "src/redux/reducers/postSlice";



const Search = () => {

    const { title } = useParams(); // search достаем из url через параметр title

    const navigate = useNavigate();  // если у нас search - underfind (нет его), то навигируем на Home. Если есть - запрос на сервер и dispatch
    const dispatch = useDispatch();
    const searchedPosts = useSelector(PostSelectors.getSearchedPosts); // достаем массив из селектора и мапим его в карточку
    const isSearchedPostsLoading = useSelector(PostSelectors.getSearchedPostsLoading);


    useEffect(() => {
        if (!title) {
            navigate(RoutesList.Home);
        } else {
            // запрос на сервер и dispatch
            dispatch(getSearchedPosts(title));
        }
    }, [title]);



    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(10) // количество фильмов (карточек) на страничке

    const lastFilmIndex = currentPage * filmsPerPage
    const firstFilmIndex = lastFilmIndex - filmsPerPage
    const currentFilms = searchedPosts.slice(firstFilmIndex, lastFilmIndex) //текущая страничка

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber)


    return (
        <div>
            <Title title={`Search results: "${title}"`} />
            <div className={styles.container}>
                {/* {searchedPosts.length ? ( */}
                {searchedPosts.length && !isSearchedPostsLoading ? (
                    <div className={styles.searchResultsContainer}>
                        {/* <CardsList cardsList={searchedPosts} /> */}
                        {/* <CardsList cardsList={currentFilms} isLoading={isSearchedPostsLoading} /> */}
                        <CardsList cardsList={currentFilms} />

                    </div>

                ) : (
                    // <EmptyState
                    //     title={"Nothing was found..."}
                    //     description={"Try another search request"}
                    // />
                    <Loader />
                )
                }
            </div>
            <Pagination
                filmsPerPage={filmsPerPage}
                totalFilms={searchedPosts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Search;