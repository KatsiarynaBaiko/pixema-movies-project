import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsListTypes, FilmTypes, Post, PostsList, SaveStatus } from "src/@types";

import { RootState } from "../store";



type InitialState = {
    // savedPosts: PostsList;
    postsList: FilmsListTypes;
    savedPosts: FilmsListTypes;
    singlePost: FilmTypes | null;
    singlePostLoading: boolean;
    isPostsListLoading: boolean;
    searchedPosts: FilmsListTypes;
    searchedPostsLoading: boolean;
    trendsPostsList: FilmsListTypes;
    trendsPostsListLoading: boolean;
};


const initialState: InitialState = {
    postsList: [],
    savedPosts: [],
    singlePost: null,
    singlePostLoading: false,
    isPostsListLoading: false,
    searchedPosts: [],
    searchedPostsLoading: false,
    trendsPostsList: [],
    trendsPostsListLoading: false,
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


        // setSavedStatus: (state, action: PayloadAction<{ card: FilmTypes }>) => {
        //     const { card } = action.payload;

        //     const savedIndex = state.savedPosts.findIndex(
        //         (item) => item.id === card.id
        //     );

        //     if (savedIndex === -1) {
        //         state.savedPosts.push(card)
        //     } else
        //         state.savedPosts.splice(savedIndex, 1)
        // },

        setSavedStatus: (state, action: PayloadAction<{ card: FilmTypes; status: SaveStatus }>) => {
            const { card, status } = action.payload;

            const savedIndex = state.savedPosts.findIndex(
                (item) => item.id === card.id
            );

            const isSaved = status === SaveStatus.Saved

            const mainIndex = isSaved ? savedIndex : 1

            if (mainIndex === -1) {
                state.savedPosts.push(card)
            } else
                state.savedPosts.splice(mainIndex, 1)
        },


        getSinglePost: (_, __: PayloadAction<string>) => { },

        setSinglePost: (state, action: PayloadAction<FilmTypes | null>) => {
            state.singlePost = action.payload;
        },

        setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
            state.singlePostLoading = action.payload;
        },

        getSearchedPosts: (_, __: PayloadAction<string>) => { },

        setSearchedPosts: (state, action: PayloadAction<FilmsListTypes>) => {
            state.searchedPosts = action.payload;
        },

        clearSearchedPosts: (state) => {
            state.searchedPosts = [];
        },

        setSearchedPostsLoading: (state, action: PayloadAction<boolean>) => {
            state.searchedPostsLoading = action.payload;
        },

        getTrendsPostsList: (_, __: PayloadAction<undefined>) => { },

        setTrendsPostsList: (state, action: PayloadAction<FilmsListTypes>) => {
            state.trendsPostsList = action.payload
        },

        setTrendsPostsListLoading: (state, action: PayloadAction<boolean>) => {
            state.trendsPostsListLoading = action.payload;
        },
    },
});

export const {
    getPostsList, setPostsList, setPostsListLoading,
    setSavedStatus,
    getSinglePost, setSinglePost, setSinglePostLoading,
    getSearchedPosts, setSearchedPosts, clearSearchedPosts, setSearchedPostsLoading,
    getTrendsPostsList, setTrendsPostsList, setTrendsPostsListLoading,
} = postSlice.actions;

export const PostSelectors = {
    getPostsList: (state: RootState) => state.postReducer.postsList,
    getPostsListLoading: (state: RootState) => state.postReducer.isPostsListLoading,
    getSavedPosts: (state: RootState) => state.postReducer.savedPosts,
    getSinglePost: (state: RootState) => state.postReducer.singlePost,
    getSinglePostLoading: (state: RootState) => state.postReducer.singlePostLoading,
    getSearchedPosts: (state: RootState) => state.postReducer.searchedPosts,
    getSearchedPostsLoading: (state: RootState) => state.postReducer.searchedPostsLoading,
    getTrendsPostsList: (state: RootState) => state.postReducer.trendsPostsList,
    getTrendsPostsListLoading: (state: RootState) => state.postReducer.trendsPostsListLoading,
};


export default postSlice.reducer;

