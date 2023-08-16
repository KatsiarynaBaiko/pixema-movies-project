import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsListTypes, FilmTypes, Post, PostsList } from "src/@types";

import { RootState } from "../store";


type InitialState = {
    // savedPosts: PostsList;
    postsList: FilmsListTypes;
    savedPosts: FilmsListTypes;
    singlePost: FilmTypes | null;
    totalCount: number;
};


const initialState: InitialState = {
    postsList: [],
    savedPosts: [],
    singlePost: null,
    totalCount: 0,
};


const postSlice = createSlice({
    name: "postReducer",
    initialState,
    reducers: {

        getPostsList: (_, __: PayloadAction<undefined>) => { },
        // getPostsList: (state, action: PayloadAction<undefined>) => { },

        setPostsList: (state, action: PayloadAction<FilmsListTypes>) => {
            state.postsList = action.payload
        },

        setSavedStatus: (state, action: PayloadAction<{ card: FilmTypes }>) => {
            const { card } = action.payload;

            const savedIndex = state.savedPosts.findIndex(
                (item) => item.id === card.id
            );

            if (savedIndex === -1) {
                state.savedPosts.push(card)
            } else
                state.savedPosts.splice(savedIndex, 1)
        },

        getSinglePost: (_, __: PayloadAction<string>) => { },

        setSinglePost: (state, action: PayloadAction<FilmTypes | null>) => {
            state.singlePost = action.payload;
        },

    },
});

export const {
    getPostsList, setPostsList,
    setSavedStatus,
    getSinglePost, setSinglePost,
} = postSlice.actions;

export const PostSelectors = {
    getPostsList: (state: RootState) => state.postReducer.postsList,
    getSavedPosts: (state: RootState) => state.postReducer.savedPosts,
    getSinglePost: (state: RootState) => state.postReducer.singlePost,
    getTotalPostsCount: (state: RootState) => state.postReducer.totalCount,

};


export default postSlice.reducer;

