//* MAKE Action Type
// Ducks 패턴에 따라 모듈을 만들 때는 액션의 이름(type)에 접두사를 넣어
// 다른 모듈과 액션 이름이 중복되는 것을 방지
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//* MAKE Action Creator function
let nextId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  todo: {
    id
  }
});

//* DECLARATION initial state
const initialState = [
  {
    id: 1,
    text: 'example',
    done: false
  }
];

//* DECLARATION Reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, done: !todo.done }
          : todo
      );
    default:
      return state
  }
}
