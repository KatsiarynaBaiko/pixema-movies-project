import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post, PostsList } from "src/@types";

import { RootState } from "../store";


type InitialState = {
    savedPosts: PostsList;
    postsList: PostsList;
};


const initialState: InitialState = {
    savedPosts: [],
    postsList: [],
};


const postSlice = createSlice({
    name: "postReducer",
    initialState,
    reducers: {

        setSavedStatus: (state, action: PayloadAction<{ card: Post }>) => {
            const { card } = action.payload;

            const savedIndex = state.savedPosts.findIndex(
                (item) => item.id === card.id
            );

            if (savedIndex === -1) {
                state.savedPosts.push(card)
            } else
                state.savedPosts.splice(savedIndex, 1)
        },

        getPostsList: (state, action: PayloadAction<undefined>) => { },
        // getPostsList: (_, __: PayloadAction<undefined>) => { },

        setPostsList: (state, action: PayloadAction<PostsList>) => {
            state.postsList = action.payload;
        },
    },
});

export const { 
    setSavedStatus,
    getPostsList, setPostsList,
} = postSlice.actions;

export const PostSelectors = {
    getSavedPosts: (state: RootState) => state.postReducer.savedPosts,
    getPostsList: (state: RootState) => state.postReducer.postsList,
};


export default postSlice.reducer;

