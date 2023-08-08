import { ReactElement } from "react";

// для FormPagesContainerProps
export type Children = ReactElement | ReactElement[];

// типизация нашей Card 
// то есть данные о фильме 
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