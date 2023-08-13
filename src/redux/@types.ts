import {FilmsListTypes, PostsList } from "src/@types";


export type PostsResponseData = {
    page: number,
    next: string,
    entries: number,
    results: PostsList,
}


export type PostsData = {
    page: number,
    next: string,
    entries: number,
    results: FilmsListTypes,
}