import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils, handleAsyncActions } from '../lib/asyncUtils';



//************* Action Types
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';



//************* thunk functions
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPosts = () => async dispatch => {
//   dispatch({ type: GET_POSTS });
//   try {
//     const posts = await postsAPI.getPosts();
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (e) {
//     dispatch({ type: GET_POSTS_ERROR, error: e });
//   }
// };
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST });
//   try {
//     const post = await postsAPI.getPostById(id);
//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (e) {
//     dispatch({ type: GET_POST_ERROR, error: e });
//   }
// };



//************* initial state
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};
// const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   post: {
//     loading: false,
//     data: null,
//     error: null
//   }
// };



export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, 'posts');
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActions(GET_POST, 'post');
      return postReducer(state, action);
    default:
      return state;
  }
}
// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading()
//       }
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload)
//       }
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error)
//       }
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading()
//       }
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload)
//       }
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error)
//       }
//     default:
//       return state
//   }
// }