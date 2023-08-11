import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post, PostsList } from "src/@types";

import { RootState } from "../store";


type InitialState = {
    savedPosts: PostsList;
};

const initialState: InitialState = {
    savedPosts: [],
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
    },
});

export const { setSavedStatus,
} = postSlice.actions;

export const PostSelectors = {
    getSavedPosts: (state: RootState) => state.postReducer.savedPosts,
};


export default postSlice.reducer;

