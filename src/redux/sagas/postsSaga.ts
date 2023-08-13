import { ApiResponse } from "apisauce";
import API from "src/utils/api";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { getPostsList, setPostsList } from "../reducers/postSlice";
import { PostsData } from "../@types";



// function* postsSagaWorker() {

//   const response: ApiResponse<PostsResponseData> = yield call(API.getPosts);

//   if (response.ok && response.data) {
//     yield put(setPostsList(response.data.results))
//   } else {
//     console.error("Set PostsList error!!", response.problem);
//   }
// }

function* postsSagaWorker() {
 
  const response: ApiResponse<PostsData | null> = yield call(
      
    API.getPosts,
  )
  if (response.data) {
      if (response.data) {
          yield put(setPostsList(response.data.results))


      } else {
          console.error('Get Posts List Error', response.problem);
      }

  }

}

// маленький вотчер, связываем его с rootSaga
export default function* postsSagaWatcher() {
    yield all([
      takeLatest(getPostsList, postsSagaWorker),
    ]);
  }