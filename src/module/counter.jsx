//* MAKE Action Type
// Ducks 패턴에 따라 모듈을 만들 때는 액션의 이름(type)에 접두사를 넣어
// 다른 모듈과 액션 이름이 중복되는 것을 방지
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//* MAKE Action Creator function
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//* DECLARATION initial state
const initialState = {
  number: 0,
  diff: 1
};

//* DECLARATION Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state
  }
}
