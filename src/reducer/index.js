import {
  CHANGE_INPUT,
  RESET_INPUT,
  CREATE_USER, 
  TOGGLE_USER, 
  REMOVE_USER, 
} from './../store/actions';
import { initialState } from './../store/initialState';

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_INPUT: 
      return {
        ...state,
        [action.name]: action.value
      };
    case RESET_INPUT:
      // return Object.keys(state).reduce((acc, current) => {
      //   acc[current] = '';
      //   return acc;
      // }, {});
      return {
        ...initialState.inputs
      };
    case CREATE_USER:
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case TOGGLE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;