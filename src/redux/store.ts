import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import postReducer from './reducers/postSlice'
import themeReducer from './reducers/themeSlice'
import rootSaga from "./sagas/rootSaga";



const sagaMiddleware = createSagaMiddleware ();

const store = configureStore({
    reducer: {
        postReducer,
        themeReducer,
    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga); // подключение саги к редакс

export type RootState = ReturnType<typeof store.getState>;

export default store