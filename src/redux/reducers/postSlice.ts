import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsListTypes, FilmTypes, Post, PostsList } from "src/@types";

import { RootState } from "../store";


type InitialState = {
    // savedPosts: PostsList;
    postsList: FilmsListTypes;
    savedPosts: FilmsListTypes;
    singlePost: FilmTypes | null;
    singlePostLoading: boolean;
    isPostsListLoading: boolean;
};


const initialState: InitialState = {
    postsList: [],
    savedPosts: [],
    singlePost: null,
    singlePostLoading: false,
    isPostsListLoading: false,
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

        setPostsListLoading: (state, action: PayloadAction<boolean>) => {
            state.isPostsListLoading = action.payload;
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

        setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
            state.singlePostLoading = action.payload;
        },

    },
});

export const {
    getPostsList, setPostsList, setPostsListLoading,
    setSavedStatus,
    getSinglePost, setSinglePost, setSinglePostLoading,
} = postSlice.actions;

export const PostSelectors = {
    getPostsList: (state: RootState) => state.postReducer.postsList,
    getPostsListLoading: (state: RootState) => state.postReducer.isPostsListLoading,
    getSavedPosts: (state: RootState) => state.postReducer.savedPosts,
    getSinglePost: (state: RootState) => state.postReducer.singlePost,
    getSinglePostLoading: (state: RootState) => state.postReducer.singlePostLoading,
};


export default postSlice.reducer;

