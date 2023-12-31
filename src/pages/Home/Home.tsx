import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import CardsList from "src/components/CardsList";
import { getPostsList, PostSelectors } from "src/redux/reducers/postSlice";
import Button, { ButtonTypes } from "src/components/Button";
import Pagination from "src/components/Pagination";
import EmptyState from "src/components/EmptyState";

import styles from './Home.module.scss';



// MOCK_ARRAY можно прокидывать 
// напрямую: <CardsList cardsList={MOCK_ARRAY} />
// но можно через useEffect

const MOCK_ARRAY = [
    // {
    //     id: 0,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Adventure",
    //     rating: 10,
    // },
    // {
    //     id: 1,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 5,
    // },
    // {
    //     id: 2,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 6,
    // },
    // {
    //     id: 3,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 4,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 5,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 5,
    // },
    // {
    //     id: 6,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 6,
    // },
    // {
    //     id: 7,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 8,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 9,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 10,
    //     poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 11,
    //     poster: undefined,
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: 3,
    // },
    // {
    //     id: 12,
    //     poster: undefined,
    //     name: "Astronauts prep",
    //     genre: "Horror",
    //     rating: undefined,
    // },

];

const Home = () => {

    // перенесли в редакс данные (получение из api по get запросу)
    // const [cardsList, setCardsList] = useState<PostsList>([]);
    // const [cardsList, setCardsList] = useState<FilmsListTypes>([]);

    // useEffect(() => {
    //     setCardsList(MOCK_ARRAY);
    // }, [])

    const dispatch = useDispatch()

    const allFilms = useSelector(PostSelectors.getPostsList)
    useEffect(() => {
        dispatch(getPostsList())
    }, [])

    const isListLoading = useSelector(PostSelectors.getPostsListLoading)

    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(10) // количество фильмов (карточек) на страничке

    const lastFilmIndex = currentPage * filmsPerPage
    const firstFilmIndex = lastFilmIndex - filmsPerPage
    const currentFilms = allFilms.slice(firstFilmIndex, lastFilmIndex) //текущая страничка


    const paginate = (pageNumber: any) => setCurrentPage(pageNumber)


    return (
        <div className={styles.container}>

            {allFilms.length ? (
                // <CardsList cardsList={MOCK_ARRAY} />
                // <CardsList cardsList={allFilms} isLoading={isListLoading} />
                <CardsList cardsList={currentFilms} isLoading={isListLoading} />
            ) : (
                <EmptyState
                    title={"Nothing was found..."}
                    description={"Please, visit another page"}
                />
            )
            }

            <Pagination
                filmsPerPage={filmsPerPage}
                totalFilms={allFilms.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Home

