import * as postsAPI from '../api/posts';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById
} from '../lib/asyncUtils';



//************* Action Types
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';



//************* thunk functions
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

// This will be use with <unstable_HistoryRouter />in react-router@6
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');

  console.log(getState());
  /* return 'state': { counter: {...}, posts: {...} } */
  
  console.log(history);
  /* {
    createHref: f(to),
    push: f(to, state),
    replace: f(to, state),
    go: f(delta),
    foward: f,
    back: f,
    block: f(blocker),
    listen: f(listener),
    location: locationObject,
    action: latestAction
  } */

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
