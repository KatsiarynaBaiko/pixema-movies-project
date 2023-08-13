import { ReactElement } from "react";


// для FormPagesContainerProps
export type Children = ReactElement | ReactElement[];


// типизация нашей Card 
// то есть данные о фильме 
// первый апишник
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
// первый апишник
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


// -----
// типизация нашей Card 
// второй api
// export type CardProps = {
//     _id?: string;
//     id?: string;
//     primaryImage: PrimaryImageType[];
//     titleType?: TitleTypeType[];
//     titleText: TitleTextType[];
//     originalTitleText?: OriginalTitleTextType[];
//     releaseYear?: ReleaseDateType[];
//     releaseDate?: ReleaseDateType[];
//     classname?: string;
//     onSavedClick?: () => void;
// };

// export type PrimaryImageType = {
//     id?: string;
//     width?: number;
//     height?: number;
//     url?: string;
//     __typename?: string;
// }

// export type TitleTypeType = {
//     text: string;
//     id: string;
//     isSeries: boolean;
//     isEpisode: boolean;
//     __typename: string;
// }

// export type TitleTextType = {
//     text: string;
//     __typename: string;
// }

// export type OriginalTitleTextType = {
//     text: string;
//     __typename: string;
// }

// export type ReleaseYearType = {
//     year: number;
//     endYear: null;
//     __typename: string;
// }

// export type ReleaseDateType = {
//     day: number;
//     month: number;
//     year: number;
//     __typename: string;
// }

// export type PostsList = CardProps[]
// export type PostsList = Posts[]

// export type Posts = {
//     _id: string;
//     id: string;
//     primaryImage: PrimaryImageType[];
//     titleType: TitleTypeType[];
//     titleText: TitleTextType[];
//     originalTitleText?: OriginalTitleTextType[];
//     releaseYear: ReleaseDateType[];
//     releaseDate: ReleaseDateType[];
// };


// new Api titles (наша карточка)
// !!!
// "_id": "61e57fd694e8253137777f4a",
//     "id": "tt0000002",
//         "primaryImage": {
//     "id": "rm2914717696",
//         "width": 457,
//             "height": 533,
//                 "url": "https://m.media-amazon.com/images/M/MV5BZDI4ZDgwMWQtMjA3ZS00NmU5LTk5MGQtZTMyMGFlMjYyZmFlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
//                     "caption": {
//         "plainText": "Le clown et ses chiens (1892)",
//             "__typename": "Markdown"
//     },
//     "__typename": "Image"
// },

// "titleType": {
//     "text": "Short",
//         "id": "short",
//             "isSeries": false,
//                 "isEpisode": false,
//                     "__typename": "TitleType"
// },

// "titleText": {
//     "text": "Le clown et ses chiens",
//         "__typename": "TitleText"
// },

// "originalTitleText": {
//     "text": "Le clown et ses chiens",
//         "__typename": "TitleText"
// },

// "releaseYear": {
//     "year": 1892,
//         "endYear": null,
//             "__typename": "YearRange"
// },

// "releaseDate": {
//     "day": 28,
//         "month": 10,
//             "year": 1892,
//                 "__typename": "ReleaseDate"
// }





