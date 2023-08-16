import { ApiResponse } from "apisauce";
import API from "src/utils/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getPostsList, getSinglePost, setPostsList, setSinglePost, setSinglePostLoading } from "../reducers/postSlice";
import { PostsResponseData, SelectedFilmsResponseData } from "../@types";


// function* postsSagaWorker() {
//   const response: ApiResponse<PostsResponseData> = yield call(API.getPosts);
//   if (response.ok && response.data) {
//     yield put(setPostsList(response.data.results))
//   } else {
//     console.error("Set PostsList error!!", response.problem);
//   }
// }


function* postsSagaWorker() {

  const response: ApiResponse<PostsResponseData | null> = yield call(
    API.getPosts,
  )

  if (response.data) {
    yield put(setPostsList(response.data.results))

  } else {
    console.error('Get Posts List error', response.problem);
  }
}


function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const id = action.payload;
  // const response: ApiResponse<FilmTypes> = yield call(    
  const response: ApiResponse<SelectedFilmsResponseData> = yield call(

    API.getSinglePost,
    // action.payload
    id
  );
  if (response.ok && response.data) {
    // yield put(setSinglePost(response.data));
    yield put(setSinglePost(response.data.results));

  } else {
    console.error('Get Single Posts List error', response.problem);
  }
  yield put(setSinglePostLoading(false));
}

// маленький вотчер, связываем его с rootSaga
export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPostsList, postsSagaWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
  ]);
}