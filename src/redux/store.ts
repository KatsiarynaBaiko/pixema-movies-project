import { configureStore } from "@reduxjs/toolkit";

import postReducer from './reducers/postSlice'

const store = configureStore({
    reducer: {
        postReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store