import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

//* MAKE Action Type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

//* MAKE Action Creator function
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga () {
  yield delay(1000);
  yield put(increase());
}
function* decreaseSaga () {
  yield delay(1000);
  yield put(decrease());
}
export function* counterSaga () {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

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
