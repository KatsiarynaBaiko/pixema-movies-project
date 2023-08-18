import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import API from "src/utils/api";

import { getPostsList, getSearchedPosts, getSinglePost, setPostsList, setPostsListLoading, setSearchedPosts, setSinglePost, setSinglePostLoading } from "../reducers/postSlice";
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
  yield put(setPostsListLoading(true));
  const response: ApiResponse<PostsResponseData | null> = yield call(
    API.getPosts,
  )

  if (response.data) {
    yield put(setPostsList(response.data.results))

  } else {
    console.error('Get Posts List error', response.problem);
  }
  yield put(setPostsListLoading(false));
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


function* getSearchedPostsWorker(action: PayloadAction<string>) {
  // const response: ApiResponse<PostsResponseData> = yield call(
  const response: ApiResponse<PostsResponseData | null> = yield call(

    API.getSearchPosts,
    action.payload
  );
  if (response.ok && response.data) {
    yield put(setSearchedPosts(response.data.results));
  } else {
    console.error("Searched Posts error", response.problem);
  }
}



// маленький вотчер, связываем его с rootSaga
export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPostsList, postsSagaWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getSearchedPosts, getSearchedPostsWorker),
  ]);
}