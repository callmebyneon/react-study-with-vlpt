//* MAKE Action Type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//* MAKE Action Creator function
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => dispatch => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000);
};

//* DECLARATION initial state
const initialState = {
  number: 0
};

//* DECLARATION Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state
  }
};
