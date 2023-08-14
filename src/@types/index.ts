import { ReactElement } from "react";


// для FormPagesContainerProps
export type Children = ReactElement | ReactElement[];


// типизация нашей Card 
// то есть данные о фильме 
// первый апишник (UnelmaMovie)
export type Post = {
    id: number;
    name: string;
    type?: string;
    release_date?: string;
    year?: string;
    tagline?: string;
    genre: string;
    poster?: string;
    backdrop?: string;
    runtime?: number;
    budget?: number;
    revenue?: number;
    popularity?: number;
    tmdb_id?: number;
    imdb_id?: string;
    is_series?: boolean;
    adult?: boolean;
    season_count?: number;
    episode_count?: number;
    series_ended?: boolean;
    language?: string;
    original_title?: string;
    certification?: string;
    rating?: number;
    vote_count?: number;
};


// массив наших постов (карточек c фильмами)
// первый апишник (UnelmaMovie)
export type PostsList = Post[]


// enum, так как у нас несколько свойств Tab
export enum TabTypes {
    Home = 'home',
    Trends = 'trends',
    Favourites = 'favourites',
    Settings = 'settings'
}


// наша табина + у нее может быть иконка
export type Tab = {
    key: TabTypes;
    title: string;
    disabled: boolean;
    icon?: ReactElement;
};


// массив наших Табин
export type TabsListType = Tab[];


// тема может быть 2 вариантов. Основная - Dark
export enum Theme {
    Dark = "dark",
    Light = "light",
}


// типизация нашей Card 
// то есть данные о фильме 
// второй апишник (moviesdatabase.p.rapidapi)
export type FilmTypes = {
    _id: string,
    id: string,

    primaryImage: {
        id: string,
        width: number,
        height: number,
        url: string,
        caption: {
            plainText: string,
            __typename: string
        },
        __typename: string
    },

    titleType: {
        text: string,
        id: string,
        isSeries: boolean,
        isEpisode: boolean,
        __typename: string
    },

    titleText: {
        text: string,
        __typename: string
    },

    originalTitleText: {
        text: string,
        __typename: string
    },

    releaseYear: {
        year: number,
        endYear: null,
        __typename: string
    },

    releaseDate: {
        day: number
        month: number
        year: number
        __typename: string
    },
    classname?: string;
    onSavedClick?: () => void;
}

// массив наших постов (карточек c фильмами)
// второй апишник (moviesdatabase.p.rapidapi)
export type FilmsListTypes = FilmTypes[];

