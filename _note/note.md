# Notes

> Study notes and keywords memos

### Contents

- [React](#🔽-react)
  - [JSX](#jsx)
  - [컴포넌트 프로퍼티 _Componenet props_](#컴포넌트-프로퍼티-component-propsproperties)
  - [리액트 훅 _React Hooks_](#리액트-훅-react-hooks)
  - [고차 컴포넌트 _React.memo_](#고차-컴포넌트-reactmemo)
  - [Context API](#context-api)
- [라우터](#🔽-라우터-react-router)
  - [v6](#v6)
- [상태관리](#🔽-상태관리)
  - [액션 _Action_](#액션-action)
  - [액션 생성함수 _Action Creator_](#액션-생성함수-action-creator)
  - [리듀서 _Reducer_](#리듀서-reducer)
  - [스토어 _Store_](#스토어-store)
  - [디스패치 _Dispatch_](#디스패치-dispatch)
  - [구독 _Subscribe_](#구독-subscribe)
  - [about Redux](#about-redux)
  - [Redux Middleware](#redux-middleware)
- [Typescript+](#typescript)
  - [install typescript with CRA](#install-typescript-with-cra)
  - [tsconfig.json](#tsconfigjson)
  - [In CodeSandbox](#in-codesandbox)

---

## 🔽 React

### JSX

- XML 형태로 코드 작성.
- React Element를 생성.
- Babel은 JSX를 [`React.createElement()`](https://ko.reactjs.org/docs/react-api.html#createelement)를 호출하는 JavaScript로 컴파일.
- 모든 태그들이 닫혀있어야 하고, HTML에서 닫지 않고 사용하던 빈 태그들도 닫고 끝나야 함 (예: `<br />`).
- 반환되는 JSX는 무조건 하나의 요소이거나 하나의 요소로 감싸져있어야하기 때문에 Fragment(`<React.Fragment>...</React.Fragment>` 혹은 `<>...</>`)
- 인라인으로 `style` 속성 적용 시 객체 형태로 작성되어야 하며, `-`로 구분되어 있는 이름은 camelCase 형태로 작성한다.
- 클래스는 `className`으로 값을 넣어준다.

### 컴포넌트 프로퍼티 _Component props(properties)_

- 컴포넌트 내 프로퍼티는 하나의 **객체** 형태.  
  _( 예: `props = { children, className, style, ... }` )_
- 함수형 컴포넌트의 경우 프로퍼티를 파라미터로 전달받음.
- 기본값 설정
  - 컴포넌트 외부에서는 `컴포넌트.defaultProps = {...}`와 같이 프로퍼티 기본값 설정.
  - 함수형 컴포넌트의 경우에는 파라미터를 받아올 때 기본 값을 간단하게 설정할 수 있음.  
    _( 예: `function 컴포넌트명 ({ 프로퍼티=defaultValue }) {...}` )_
- `props.children`으로 컴포넌트 태그 사이에 넣은 값을 조회함.
- 컴포넌트를 사용하면서 props 값 설정 생략 시, true값으로 간주됨.
- PropTypes
  - [종류들](https://ko.reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

### 리액트 훅 _React Hooks_

- `Hook`은 JavaScript **함수** 형태.
- [사용 규칙](https://ko.reactjs.org/docs/hooks-rules.html)
  - **최상위에서만(at the top level)** 호출되어야 하고 반복문, 조건문, 중첩된 함수 내에서 실행되어선 안된다.
  - 일반 JavaScript 함수 등이 아닌, **React 함수 컴포넌트 내** (혹은 custom Hook 내)에서만 호출해야 함.
- [**hooks reference**](https://ko.reactjs.org/docs/hooks-reference.html)

  - useState (State Hook)
    - 현재의 `state`값과 이 값을 업데이트 하는 함수 쌍으로 이루어진 배열을 반환
      ```jsx
      // Example
      const [state, setState] = useState(initialValue);
      ```
    - 함수형 컴포넌트에서 클래스 컴포넌트의 `this.state`와 같은 기능으로 사용되지만 `state`가 갱신될 때 병합이 아닌 새로운 값으로 대체되기 때문에 똑같다고 볼 수 없음.
    - 클래스 컴포넌트에서는 사용할 수 없으며, 함수형 컴포넌트 내에서 여러 개의 `state` 변수를 사용하거나 객체상태로 `state`를 사용할 수 있음.
  - useEffect (Effect Hook)
    - side effect를 수행
    - 컴포넌트가 렌더링 이후(DOM 업데이트)에 어떤 일을 수행해야하는지를 정의. ⇒ 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 매번 실행.
    - effect에서 반환하는 함수는 어떻게 정리(clean-up)할 것인지 표시함. ⇒ effect에 정리가 필요할 때만 함수를 반환하며 필요없는 경우에는 아무것도 반환하지 않음.
      ```jsx
      // Example
      useEffect(() => {
        const subscription = props.source.subscribe();
        return () => {
          // Clean up the subscription
          subscription.unsubscribe();
        };
      });
      ```
    - 서로 관련 없는 로직을 처리하기 위해 effect 또한 여러번 사용할 수 있음.
    - 클래스 생명주기와 비교했을 때, `componenetDidMount`와 `componentDidUpdate`, `componentWillUnmount`가 합쳐진 것과 비슷함.
    - 특정 값들이 리렌더링 시 변경되지 않는다면 effect를 건너뛰도록 하여 성능 최적화를 할 수 있음.
    - effect를 실행하고 정리하는 과정을 mount-unmount 시에 딱 한 번씩만 실행하기 위해서 두번째 인수에 빈 배열을 넘긴다.
  - useContext
    - `React.createContext`에서 반환된 컨텍스트 객체를 받아 그 컨텍스트의 현재값을 반환하며 현재 값은 트리 안에서 Hook을 호출하는 컴포넌트와 가장 가까운 Provider의 `value` 프로퍼티에 의해 결정.
    - `useContext`로 전달한 인자는 컨텍스트 객체 그 자체여야함.
      ```jsx
      // Example
      const value = useContext(MyContext); // O
      // useContext(MyContext.Consumer);   // X
      // useContext(MyContext.Provider);   // X
      ```
    - `useContext`를 호출한 컴포넌트는 컨텍스트 값이 변경되면 항상 리렌더링 됨.
  - useCallback

    - 메모이제이션(memoization)된 콜백을 반환.

      ```jsx
      //* useCallback(fn, deps) === useMemo(() => fn, deps)

      // Example
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      ```

  - useReducer
    - `useState`의 대체 함수. `(state, action) => newState` 형태로 리듀서를 받고 디스패치 매서드와 짝의 형태로 `state`를 반환.
      ```jsx
      // Example
      const [state, dispatch] = useReducer(reducer, initialArg, init);
      ```
  - useRef

    - `.current` 프로퍼티를 통해 전달될 인자로 초기화된 변경 가능한 ref 객체를 반환.
    - 내용이 변경될 때 변경되는 것을 알려주지 않으며 `.current` 프로퍼티가 변형되더라도 리렌더링되지 않음.

      ```jsx
      // Example
      const refContainer = useRef(initialValue);
      ```

  - useMemo

    - 성능 최적화를 위해 사용.
    - 첫번째 인수에 함수, 두번째 인수에 배열을 넣어 사용하며, 두번째 인수인 배열에 넣어준 값이 바뀔때만 첫번째 인수의 함수가 실행. watching 하고 있는 값이 변경되지 않았다면 이전의 값을 재사용.

      ```jsx
      // Example
      const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
      ```

  - 그 외
    - [useImperativeHandle](https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle)
    - [useLayoutEffect](https://ko.reactjs.org/docs/hooks-reference.html#uselayouteffect)
    - [useDebugValue](https://ko.reactjs.org/docs/hooks-reference.html#usedebugvalue)

- [custom hook](https://ko.reactjs.org/docs/hooks-custom.html)

### 고차 컴포넌트 _React.memo_

- 오직 성능 최적화를 위해서만 사용됨.
- `React.memo`로 감싼 컴포넌트는 `props`의 변화에만 영향을 받아 컴포넌트를 항상 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용하거나, 혹은 `useState`, `useReducer`, `useContext` 사용 시 `state`나 `context`가 변할 때에도 다시 렌더링됨.
- 기본적으로 props가 갖는 객체에 대해 얕은 비교만 수행하므로 다른 비교 동작을 원한다면 두번째 인자로 비교 함수롤 제공함.

### Context API

- 리액트 컴포넌트 트리 안에서 전역적으로 데이터(예: 로그인한 유저, 테마, 언어)를 공유할 수 있도록 만들어짐.
- [React Context](https://ko.reactjs.org/docs/context.html)
- [예제](https://react.vlpt.us/basic/22-context-dispatch.html)

---

## 🔽 라우터 _react-router_

### [v6](https://reactrouter.com/docs/en/v6/api#reference)

| before                           | after                                                                                       | return                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `<Switch />`                     | [`<Routes />`](https://reactrouter.com/docs/en/v6/api#routes-and-route)                     | -                                                                                                            |
| `<Redirect />`                   | [`<Navigate replace? />`](https://reactrouter.com/docs/en/v6/api#navigate)                  | -                                                                                                            |
| props `match.params`             | [`useParams()`](https://reactrouter.com/docs/en/v6/api#useparams)                           | `{ ...urlParameterObj }`                                                                                     |
| props `location`                 | [`useLocation()`](https://reactrouter.com/docs/en/v6/api#uselocation)                       | `{ pathname, search, hash, state, key }`                                                                     |
| props `history`                  | [`useNavigate()`](https://reactrouter.com/docs/en/v6/api#usenavigate)                       | returns a Function                                                                                           |
| read and modify the query string | [`useSearchParams()`](https://reactrouter.com/docs/en/v6/api#usesearchparams)               | \[[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams), SetURLSearchParams\] |
| provide customHistory            | [`<unstable_HistoryRouter>`](https://reactrouter.com/docs/en/v6/api#unstable_historyrouter) |                                                                                                              |

---

## 🔽 상태관리

### 액션 _Action_

- 하나의 **객체**로 표현.
- 상태(`state`)에 어떠한 변호가 필요할 때 발생.
- `type` 필드 필수.

### 액션 생성함수 _Action Creator_

- 액션을 만드는 **함수**.
- 파라미터를 받아와서 액션 개체 형태를 반환.
- redux 사용 시 액션 생성함수 사용이 필수적이지 않음.

### 리듀서 _Reducer_

- 변화를 일으키는 **함수**.
- `state`, `action`을 파라미터로 받아서 `action type`에 따라 변화된 `state`값을 반환.
- `useReducer`에선 `default:` 부분에 에러를 발생시키도록 하지만, redux의 리듀서는 `state`를 그대로 반환하도록 작성해야 함.
- redux를 사용할때는 여러개의 리듀서를 합쳐 루트 리듀서를 만들 수 있음.

### 스토어 _Store_

- 현재 앱 상태와 리듀서, 추가적인 내장 함수들의 모음.
- redux에서는 한 어플리케이션당 하나의 스토어를 만듬.

### 디스패치 _dispatch_

- 스토어 내장**함수** 중 하나로, 액션을 발생시킴.
- `dispatch`라는 함수에 `action`을 파라미터로 전달하여 호출하면, 스토어가 리듀서 함수를 실행, 액션 처리 로직에 따라 상태 업데이트.

### 구독 _subscribe_

- 스토어의 내장**함수** 중 하나로, 함수 형태의 값을 파라미터로 받아옴.
- 액션이 디스패치 되었을 때 마다 `subscribe` 함수로 전달된 함수 호출.
- redux에서는 직접 사용할 일이 없지만, react-redux 라이브러리에서 제공하는 `connect` 함수 혹은 `useSelector` 훅을 이용하여 리덕스 스토어의 상태에 구독.

### about **Redux**

- Redux와 Context API 사용의 차이점
  1. 미들웨어 (Middleware)  
     : `reducer` 함수
  2. 유용한 함수와 Hooks  
     : `connect` 함수
  3. 하나의 커다란 Context를 사용  
     : redux에서는 모든 글로벌 상태를 하나의 커다란 객체에 넣어서 관리.  
     : Context API는 글로벌 상태 관리를 할 때 일반적으로 기능별로 Context를 만들어서 사용함.
- 3가지 규칙
  1. 하나의 애플리케이션 안에는 하나의 스토어만
  2. 상태(state)는 읽기 전용으로 불변성 유지
  3. Reducer(변화를 일으키는 함수)는 순수 함수여야 함  
     == 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환
- 리덕스 모듈
  - **액션 타입, 액셩 생성함수, 리듀서**를 모두 들어있는 자바스크립트 파일을 의미
  - 각각 항목들이 분리되어 있을 수도 있지만 서로 다른 디렉토리, 파일에 분리되어있을 필요는 없음 ⇒ ["Ducks 패턴"](https://github.com/erikras/ducks-modular-redux)
  - 프로미스를 다루는 리덕스 모듈을 다룰 땐,
    1. 프로미스가 시작/성공/실패했을 때 다른 액션을 디스패치
    2. 각 프로미스마다 thunk 함수 생성
    3. 리듀서에서 액션에 따라 로딩중/결과/에러 상태를 변경
- **Hooks**

  - [`useSelector`](https://react-redux.js.org/api/hooks#useselector)

    - redux 스토어에서 상태를 반환

      ```jsx
      const result: any = useSelector(selector: Function, equalityFn?: Function)

      // Example
      const counter = useSelector((state) => state.counter);
      ```

  - [`useDispatch`](https://react-redux.js.org/api/hooks#usedispatch)
    - redux 스토어에서 디스패치 함수 반환
    - 특정 액션 디스패치를 위해 사용
      ```jsx
      // (in component,)
      const dispatch = useDispatch();
      ...
      return <button onClick={() => dispatch({ type: 'INCREASE' })}> INCREASE </button>
      ...
      ```
  - ...

### [Redux Middleware](https://react.vlpt.us/redux-middleware/)

- \[액션\] ⇒ **미들웨어** ⇒ 리듀서 ⇒ \(스토어\)
- 액션이 디스매치 된 다음, 리듀서에서 해당 액션을 받아와 업데이트 하기 전에 추가적인 작업이 가능  
  _(예: 특정 조건에 따라 액션을 무시되게 하거나, 액션을 콘솔에 출력하거나 서버에 로깅, 액션이 디스패치 됐을 때 수정하여 리듀서에 전달, 특정액션 발생 시 다른 액션 발생 혹은 특정 자바스크립트 함수 실행 등)_
- 리덕스에서의 주된 사용 용도는 API 연동과 같은 비동기 작업 처리를 위함.
- 비동기 작업에 관련된 미들웨어 라이브러리: [`redux-thunk`](https://github.com/reduxjs/redux-thunk), [`redux-saga`](https://github.com/redux-saga/redux-saga), [`redux-observable`](https://redux-observable.js.org/), [`redux-promise-middleware`](https://www.npmjs.com/package/redux-promise-middleware)
- browser extension과 함께 사용할 때는 [extension’s options](https://www.npmjs.com/package/@redux-devtools/extension) 참고
- **redux-logger**

  - action 발생 시 콘솔에 로깅.
  - `createStore `를 통해 스토어 생성시 `react-logger`의 `logger` 사용하는 경우, `logger`가 가장 마지막에 와야함.

    ```jsx
    ...
    const store = createStore(
      rootReducer,
      // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
      composeWithDevTools(applyMiddleware(ReduxThunk, logger))
    );
    ...
    ```

- **redux-thunk**
  - 함수를 디스패치 할 수 있게 해주는 미들웨어.
- **redux-saga**
  - 액션을 모니터링하다가 특정 액션이 발생하면 이에 따라 특정 작업을 하도록 사용.
  - 비동기 작업 시 기존 요청을 취소 처리하거나 특정 액션 발생 시 다른 액션 디스패치 처리 혹은 JS 코드 실행, API 요청 실패 시 재요청 등
  - [Gernerator 문법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator) 시용 (`function*`)
  - **effects** (util functions `from 'react-saga/effects'`)
    - `all`: 배열 안의 여러 사가를 동시에 실행.
      ```jsx
      yield all([counterSaga(), postsSaga()]);
      ```
    - `call`: 두번째 인자부터의 파라미터를 사용하여 첫번째 인자의 함수 실행
      ```jsx
      const post = yield call(postsAPI.getPostById, param);
      // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 전달.
      ```
    - `put`: 특정 액션을 디스패치
    - `take`
      - `takeEvery`: 특정 액션 타입에 대해 디스패치되는 모든 액션을 처리
      - `takeLatest`: 특정 액션 타입에 대해 디스패치된 가장 마지막 액션만을 처리
    - `getContext`: saga 컨텍스트의 특정 속성 반환
    - ...

---

## Typescript+

### install typescript with CRA

- [참고 문서](https://create-react-app.dev/docs/adding-typescript/#installation)

- 타입스크립트 설정이 적용된 프로젝트 생성

  ```shell
  npx create-react-app my-app --template typescript
  ```

  ```shell
  yarn create react-app my-app --template typescript
  ```

- 생성된 파일에 타입스트립트 설치

  ```shell
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

  ```shell
  yarn add typescript @types/node @types/react @types/react-dom @types/jest
  ```

### tsconfig.json

- _Example_
  - `"compileOptions":`
    - `"target": "es5",` -------------- 컴파일된 코드가 실행될 환경
    - `"module": "commonjs",` ------- 컴파일에 사용할 모듈 시스템
    - `"strict": true,` --------------- 모든 타입 체킹 활성화 여부
    - `"exModuleInterop": true,` --- [(참고)](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file)
    - `"outDir": "./dist"` ----------- 컴파일된 파일 저장 경로
- 타입 정의

  ```ts
  // 기본 타입
  const numbers: number[] = [1, 2, 3];
  const messages: string[] = ['hello', 'world'];
  let mightBeUndefined: string | undefined = undefined;
  let nullableNumber: number | null = null;
  let color: 'red' | 'orange' | 'yellow' = 'red';

  // 함수에서 타입 정의
  function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  function returnNothing(): void {
    console.log("I'm just saying hello world");
  }
  ```

- 인터페이스로 일반 객체 타입 정의

  ```ts
  interface Person {
    name: string;
    age?: number;
  }
  interface Developer extends Person {
    skills: string[];
  }

  const person: Person = {
    name: 'persona',
    age: 20
  }

  const export: Developer = {
    name: 'developer',
    skills: ['javascript', 'react']
  }

  type People = Person[]; // Type Alias 사용
  const people: People = [person, expert];
  ```

- Generics

  - 제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대해 호환을 맞춰야하는 상황에서 사용

  ```ts
  // like in this case,
  function merge(a: any, b: any): any {
    return { ...a, ...b };
  }
  // we can use like this.
  function merge<A, B>(a: A, b: B): A & B {
    return { ...a, ...b };
  }

  function wrap<T>{param: T} {
    return { param }
  }
  ```

  ```ts
  // ...
  // use in interface,
  interface Items<T> {
    list: T[];
  }
  const items: Items<string> = {
    list: ['a', 'b', 'c'],
  };
  ```

  ```ts
  // ...
  // use in type,
  type Items<T> = {
    list: T[];
  };
  const items: Items<string> = {
    list: ['a', 'b', 'c'],
  };
  ```

  ```ts
  // ...
  // use in class
  class Queue<T> {
    list: t[] = [];
    get length() {
      return this.list.length;
    }
    enqueue(item: T) {
      this.list.push(item);
    }
    dequeue() {
      return this.list.shift();
    }
  }
  ```

### In CodeSandbox

[CondeSandbox에서 8장 실습코드 확인](https://codesandbox.io/s/react-study-with-vlpt--typescript-oxe7q3?file=/src/App.tsx)
