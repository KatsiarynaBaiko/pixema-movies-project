import { PostsList } from "src/@types";


export type PostsResponseData = {
    page: number,
    next: string,
    entries: number,
    results: PostsList,
}