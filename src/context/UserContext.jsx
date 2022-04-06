import { createContext, useContext, useReducer } from 'react';

import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState
} from './asyncActionUtils';
import * as api from './api';

// State Object: initialState
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// Reducer
function usersReducer(state, action) {
  switch(action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
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
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);