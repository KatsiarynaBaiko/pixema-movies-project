import {FilmsListTypes, FilmTypes, PostsList } from "src/@types";

// export type PostsResponseData = {
//     page: number,
//     next: string,
//     entries: number,
//     results: PostsList,
// }


export type PostsResponseData = {
    page: number,
    next: string,
    entries: number,
    results: FilmsListTypes,
}


export type SelectedFilmsResponseData = {
    results: FilmTypes,
}