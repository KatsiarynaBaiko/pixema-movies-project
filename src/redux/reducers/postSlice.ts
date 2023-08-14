import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsListTypes, FilmTypes, Post, PostsList } from "src/@types";

import { RootState } from "../store";


type InitialState = {
    // savedPosts: PostsList;
    postsList: FilmsListTypes;
    savedPosts: FilmsListTypes;
};


const initialState: InitialState = {
    postsList: [],
    savedPosts: [],
};


const postSlice = createSlice({
    name: "postReducer",
    initialState,
    reducers: {

        // setSavedStatus: (state, action: PayloadAction<{ card: Post }>) => {
        //     const { card } = action.payload;

        //     const savedIndex = state.savedPosts.findIndex(
        //         (item) => item.id === card.id
        //     );

        //     if (savedIndex === -1) {
        //         state.savedPosts.push(card)
        //     } else
        //         state.savedPosts.splice(savedIndex, 1)
        // },

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
    },
});

export const {
    getPostsList, setPostsList,
    setSavedStatus,
} = postSlice.actions;

export const PostSelectors = {
    getPostsList: (state: RootState) => state.postReducer.postsList,
    getSavedPosts: (state: RootState) => state.postReducer.savedPosts,
};


export default postSlice.reducer;

