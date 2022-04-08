import * as postsAPI from '../api/posts';
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById
} from '../lib/asyncUtils';
import { takeEvery } from 'redux-saga/effects';



//************* Action Types
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';



//************* thunk functions
export const getPosts = () => ({ type: GET_POSTS });
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });

const getPostsSage = createPromiseSaga(GET_POSTS, postsAPI.getPosts);

const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

// MERGE saga
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSage);
  yield takeEvery(GET_POST, getPostSaga);
}

// This will be use with <unstable_HistoryRouter /> in react-router@6
// we can use value from `withExtraArgument` by third param: { history }
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');

  console.log(getState());
  // { counter: {...}, posts: {...} }: (state)
  
  console.log(history);
  // {
  //   createHref: f(to),
  //   push: f(to, state),
  //   replace: f(to, state),
  //   go: f(delta),
  //   foward: f,
  //   back: f,
  //   block: f(blocker),
  //   listen: f(listener),
  //   location: locationObject,
  //   action: latestAction
  // }

}




//************* initial state
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};



export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActionsById(GET_POST, 'post');
      return postReducer(state, action);
    default:
      return state;
  }
}
