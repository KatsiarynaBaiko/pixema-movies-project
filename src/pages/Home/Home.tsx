import React, { useEffect, useState } from "react";
import classNames from "classnames";

import CardsList from "src/components/CardsList";
import { PostsList } from "src/@types";

import styles from './Home.module.scss';


// MOCK_ARRAY можно прокидывать 
// напрямую: <CardsList cardsList={MOCK_ARRAY} />
// но можно через useEffect

const MOCK_ARRAY = [
    {
        id: 0,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Adventure",
        rating: 10,
    },
    {
        id: 1,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 5,
    },
    {
        id: 2,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 6,
    },
    {
        id: 3,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 4,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 5,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 5,
    },
    {
        id: 6,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 6,
    },
    {
        id: 7,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 8,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 9,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 10,
        poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 11,
        poster: undefined,
        name: "Astronauts prep",
        genre: "Horror",
        rating: 3,
    },
    {
        id: 12,
        poster: undefined,
        name: "Astronauts prep",
        genre: "Horror",
        rating: undefined,
    },
];

const Home = () => {

    const [cardsList, setCardsList] = useState<PostsList>([]);
    useEffect(() => {
        setCardsList(MOCK_ARRAY);
    }, [])

    return (
        <div className={styles.container}>
            {/* <CardsList cardsList={MOCK_ARRAY} /> */}
            <CardsList cardsList={cardsList} />
        </div>
    )
}

export default Home
