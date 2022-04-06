import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

// State Object: initialState
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null
  },
  user: {
    loading: false,
    data: null,
    error: null
  }
};

// State Object: when loading
const loadingState = {
  loading: true,
  data: null,
  error: null
};

// Util Function: change state success
const success = data => ({
  loading: false,
  data,
  error: null
});

// Util Function: change state error
const error = error => ({
  loading: false,
  data: null,
  error
})

// Reducer
function usersReducer(state, action) {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data)
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data)
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Separate contexts for State and Dispatch
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// Provider: wrapping upper contexts
export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  )
}

// Custom Hook: for read state easily
export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error(`Cannot find UsersProvider`);
  }
  return state;
}

// Custom Hook: for use dispatch easily
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

// GETTER Function: get date with Axios
export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USERS_ERROR', error: e });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USER_ERROR', error: e });
  }
}