import { createStore } from "redux";

// createStrore: function to make store
// In react project, there are only one store exist.

//* DEFINE initial state
const initialState = {
  counter: 0,
  text: '',
  list: []
};

//* DEFINE action types
//* Action types
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//* DEFINE action creator function
const increase = () => ({
  type: INCREASE
})

const decrease = () => ({
  type: DECREASE
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

//* MAKE reducer
function reducer (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state;
  }
}

//* MAKE store
const store = createStore(reducer);

console.log('getState()',store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('Hello'));
store.dispatch(addToList({ id: 1, text: 'wow!' }));