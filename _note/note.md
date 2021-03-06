# Notes

> Study notes and keywords memos

### Table of Contents

- [React](#๐ฝ-react)
  - [JSX](#jsx)
  - [์ปดํฌ๋ํธ ํ๋กํผํฐ _Componenet props_](#์ปดํฌ๋ํธ-ํ๋กํผํฐ-component-propsproperties)
  - [๋ฆฌ์กํธ ํ _React Hooks_](#๋ฆฌ์กํธ-ํ-react-hooks)
  - [๊ณ ์ฐจ ์ปดํฌ๋ํธ _React.memo_](#๊ณ ์ฐจ-์ปดํฌ๋ํธ-reactmemo)
  - [Context API](#context-api)
- [๋ผ์ฐํฐ](#๐ฝ-๋ผ์ฐํฐ-react-router)
  - [v6](#v6)
- [์ํ๊ด๋ฆฌ](#๐ฝ-์ํ๊ด๋ฆฌ)
  - [์ก์ _Action_](#์ก์-action)
  - [์ก์ ์์ฑํจ์ _Action Creator_](#์ก์-์์ฑํจ์-action-creator)
  - [๋ฆฌ๋์ _Reducer_](#๋ฆฌ๋์-reducer)
  - [์คํ ์ด _Store_](#์คํ ์ด-store)
  - [๋์คํจ์น _Dispatch_](#๋์คํจ์น-dispatch)
  - [๊ตฌ๋ _Subscribe_](#๊ตฌ๋-subscribe)
  - [about Redux](#about-redux)
  - [Redux Middleware](#redux-middleware)
- [Typescript+](#typescript)
  - [install typescript with CRA](#install-typescript-with-cra)
  - [tsconfig.json](#tsconfigjson)
  - [In CodeSandbox](#in-codesandbox)

---

## ๐ฝ React

### JSX

- XML ํํ๋ก ์ฝ๋ ์์ฑ.
- React Element๋ฅผ ์์ฑ.
- Babel์ JSX๋ฅผ [`React.createElement()`](https://ko.reactjs.org/docs/react-api.html#createelement)๋ฅผ ํธ์ถํ๋ JavaScript๋ก ์ปดํ์ผ.
- ๋ชจ๋  ํ๊ทธ๋ค์ด ๋ซํ์์ด์ผ ํ๊ณ , HTML์์ ๋ซ์ง ์๊ณ  ์ฌ์ฉํ๋ ๋น ํ๊ทธ๋ค๋ ๋ซ๊ณ  ๋๋์ผ ํจ (์: `<br />`).
- ๋ฐํ๋๋ JSX๋ ๋ฌด์กฐ๊ฑด ํ๋์ ์์์ด๊ฑฐ๋ ํ๋์ ์์๋ก ๊ฐ์ธ์ ธ์์ด์ผํ๊ธฐ ๋๋ฌธ์ Fragment(`<React.Fragment>...</React.Fragment>` ํน์ `<>...</>`)
- ์ธ๋ผ์ธ์ผ๋ก `style` ์์ฑ ์ ์ฉ ์ ๊ฐ์ฒด ํํ๋ก ์์ฑ๋์ด์ผ ํ๋ฉฐ, `-`๋ก ๊ตฌ๋ถ๋์ด ์๋ ์ด๋ฆ์ camelCase ํํ๋ก ์์ฑํ๋ค.
- ํด๋์ค๋ `className`์ผ๋ก ๊ฐ์ ๋ฃ์ด์ค๋ค.

### ์ปดํฌ๋ํธ ํ๋กํผํฐ _Component props(properties)_

- ์ปดํฌ๋ํธ ๋ด ํ๋กํผํฐ๋ ํ๋์ **๊ฐ์ฒด** ํํ.  
  _( ์: `props = { children, className, style, ... }` )_
- ํจ์ํ ์ปดํฌ๋ํธ์ ๊ฒฝ์ฐ ํ๋กํผํฐ๋ฅผ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌ๋ฐ์.
- ๊ธฐ๋ณธ๊ฐ ์ค์ 
  - ์ปดํฌ๋ํธ ์ธ๋ถ์์๋ `์ปดํฌ๋ํธ.defaultProps = {...}`์ ๊ฐ์ด ํ๋กํผํฐ ๊ธฐ๋ณธ๊ฐ ์ค์ .
  - ํจ์ํ ์ปดํฌ๋ํธ์ ๊ฒฝ์ฐ์๋ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ฐ์์ฌ ๋ ๊ธฐ๋ณธ ๊ฐ์ ๊ฐ๋จํ๊ฒ ์ค์ ํ  ์ ์์.  
    _( ์: `function ์ปดํฌ๋ํธ๋ช ({ ํ๋กํผํฐ=defaultValue }) {...}` )_
- `props.children`์ผ๋ก ์ปดํฌ๋ํธ ํ๊ทธ ์ฌ์ด์ ๋ฃ์ ๊ฐ์ ์กฐํํจ.
- ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ๋ฉด์ props ๊ฐ ์ค์  ์๋ต ์, true๊ฐ์ผ๋ก ๊ฐ์ฃผ๋จ.
- PropTypes
  - [์ข๋ฅ๋ค](https://ko.reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

### ๋ฆฌ์กํธ ํ _React Hooks_

- `Hook`์ JavaScript **ํจ์** ํํ.
- [์ฌ์ฉ ๊ท์น](https://ko.reactjs.org/docs/hooks-rules.html)
  - **์ต์์์์๋ง(at the top level)** ํธ์ถ๋์ด์ผ ํ๊ณ  ๋ฐ๋ณต๋ฌธ, ์กฐ๊ฑด๋ฌธ, ์ค์ฒฉ๋ ํจ์ ๋ด์์ ์คํ๋์ด์  ์๋๋ค.
  - ์ผ๋ฐ JavaScript ํจ์ ๋ฑ์ด ์๋, **React ํจ์ ์ปดํฌ๋ํธ ๋ด** (ํน์ custom Hook ๋ด)์์๋ง ํธ์ถํด์ผ ํจ.
- [**hooks reference**](https://ko.reactjs.org/docs/hooks-reference.html)

  - useState (State Hook)
    - ํ์ฌ์ `state`๊ฐ๊ณผ ์ด ๊ฐ์ ์๋ฐ์ดํธ ํ๋ ํจ์ ์์ผ๋ก ์ด๋ฃจ์ด์ง ๋ฐฐ์ด์ ๋ฐํ
      ```jsx
      // Example
      const [state, setState] = useState(initialValue);
      ```
    - ํจ์ํ ์ปดํฌ๋ํธ์์ ํด๋์ค ์ปดํฌ๋ํธ์ `this.state`์ ๊ฐ์ ๊ธฐ๋ฅ์ผ๋ก ์ฌ์ฉ๋์ง๋ง `state`๊ฐ ๊ฐฑ์ ๋  ๋ ๋ณํฉ์ด ์๋ ์๋ก์ด ๊ฐ์ผ๋ก ๋์ฒด๋๊ธฐ ๋๋ฌธ์ ๋๊ฐ๋ค๊ณ  ๋ณผ ์ ์์.
    - ํด๋์ค ์ปดํฌ๋ํธ์์๋ ์ฌ์ฉํ  ์ ์์ผ๋ฉฐ, ํจ์ํ ์ปดํฌ๋ํธ ๋ด์์ ์ฌ๋ฌ ๊ฐ์ `state` ๋ณ์๋ฅผ ์ฌ์ฉํ๊ฑฐ๋ ๊ฐ์ฒด์ํ๋ก `state`๋ฅผ ์ฌ์ฉํ  ์ ์์.
  - useEffect (Effect Hook)
    - side effect๋ฅผ ์ํ
    - ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง ์ดํ(DOM ์๋ฐ์ดํธ)์ ์ด๋ค ์ผ์ ์ํํด์ผํ๋์ง๋ฅผ ์ ์. โ ๊ธฐ๋ณธ์ ์ผ๋ก ์ฒซ๋ฒ์งธ ๋ ๋๋ง๊ณผ ์ดํ์ ๋ชจ๋  ์๋ฐ์ดํธ์์ ๋งค๋ฒ ์คํ.
    - effect์์ ๋ฐํํ๋ ํจ์๋ ์ด๋ป๊ฒ ์ ๋ฆฌ(clean-up)ํ  ๊ฒ์ธ์ง ํ์ํจ. โ effect์ ์ ๋ฆฌ๊ฐ ํ์ํ  ๋๋ง ํจ์๋ฅผ ๋ฐํํ๋ฉฐ ํ์์๋ ๊ฒฝ์ฐ์๋ ์๋ฌด๊ฒ๋ ๋ฐํํ์ง ์์.
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
    - ์๋ก ๊ด๋ จ ์๋ ๋ก์ง์ ์ฒ๋ฆฌํ๊ธฐ ์ํด effect ๋ํ ์ฌ๋ฌ๋ฒ ์ฌ์ฉํ  ์ ์์.
    - ํด๋์ค ์๋ช์ฃผ๊ธฐ์ ๋น๊ตํ์ ๋, `componenetDidMount`์ `componentDidUpdate`, `componentWillUnmount`๊ฐ ํฉ์ณ์ง ๊ฒ๊ณผ ๋น์ทํจ.
    - ํน์  ๊ฐ๋ค์ด ๋ฆฌ๋ ๋๋ง ์ ๋ณ๊ฒฝ๋์ง ์๋๋ค๋ฉด effect๋ฅผ ๊ฑด๋๋ฐ๋๋ก ํ์ฌ ์ฑ๋ฅ ์ต์ ํ๋ฅผ ํ  ์ ์์.
    - effect๋ฅผ ์คํํ๊ณ  ์ ๋ฆฌํ๋ ๊ณผ์ ์ mount-unmount ์์ ๋ฑ ํ ๋ฒ์ฉ๋ง ์คํํ๊ธฐ ์ํด์ ๋๋ฒ์งธ ์ธ์์ ๋น ๋ฐฐ์ด์ ๋๊ธด๋ค.
  - useContext
    - `React.createContext`์์ ๋ฐํ๋ ์ปจํ์คํธ ๊ฐ์ฒด๋ฅผ ๋ฐ์ ๊ทธ ์ปจํ์คํธ์ ํ์ฌ๊ฐ์ ๋ฐํํ๋ฉฐ ํ์ฌ ๊ฐ์ ํธ๋ฆฌ ์์์ Hook์ ํธ์ถํ๋ ์ปดํฌ๋ํธ์ ๊ฐ์ฅ ๊ฐ๊น์ด Provider์ `value` ํ๋กํผํฐ์ ์ํด ๊ฒฐ์ .
    - `useContext`๋ก ์ ๋ฌํ ์ธ์๋ ์ปจํ์คํธ ๊ฐ์ฒด ๊ทธ ์์ฒด์ฌ์ผํจ.
      ```jsx
      // Example
      const value = useContext(MyContext); // O
      // useContext(MyContext.Consumer);   // X
      // useContext(MyContext.Provider);   // X
      ```
    - `useContext`๋ฅผ ํธ์ถํ ์ปดํฌ๋ํธ๋ ์ปจํ์คํธ ๊ฐ์ด ๋ณ๊ฒฝ๋๋ฉด ํญ์ ๋ฆฌ๋ ๋๋ง ๋จ.
  - useCallback

    - ๋ฉ๋ชจ์ด์ ์ด์(memoization)๋ ์ฝ๋ฐฑ์ ๋ฐํ.

      ```jsx
      //* useCallback(fn, deps) === useMemo(() => fn, deps)

      // Example
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      ```

  - useReducer
    - `useState`์ ๋์ฒด ํจ์. `(state, action) => newState` ํํ๋ก ๋ฆฌ๋์๋ฅผ ๋ฐ๊ณ  ๋์คํจ์น ๋งค์๋์ ์ง์ ํํ๋ก `state`๋ฅผ ๋ฐํ.
      ```jsx
      // Example
      const [state, dispatch] = useReducer(reducer, initialArg, init);
      ```
  - useRef

    - `.current` ํ๋กํผํฐ๋ฅผ ํตํด ์ ๋ฌ๋  ์ธ์๋ก ์ด๊ธฐํ๋ ๋ณ๊ฒฝ ๊ฐ๋ฅํ ref ๊ฐ์ฒด๋ฅผ ๋ฐํ.
    - ๋ด์ฉ์ด ๋ณ๊ฒฝ๋  ๋ ๋ณ๊ฒฝ๋๋ ๊ฒ์ ์๋ ค์ฃผ์ง ์์ผ๋ฉฐ `.current` ํ๋กํผํฐ๊ฐ ๋ณํ๋๋๋ผ๋ ๋ฆฌ๋ ๋๋ง๋์ง ์์.

      ```jsx
      // Example
      const refContainer = useRef(initialValue);
      ```

  - useMemo

    - ์ฑ๋ฅ ์ต์ ํ๋ฅผ ์ํด ์ฌ์ฉ.
    - ์ฒซ๋ฒ์งธ ์ธ์์ ํจ์, ๋๋ฒ์งธ ์ธ์์ ๋ฐฐ์ด์ ๋ฃ์ด ์ฌ์ฉํ๋ฉฐ, ๋๋ฒ์งธ ์ธ์์ธ ๋ฐฐ์ด์ ๋ฃ์ด์ค ๊ฐ์ด ๋ฐ๋๋๋ง ์ฒซ๋ฒ์งธ ์ธ์์ ํจ์๊ฐ ์คํ. watching ํ๊ณ  ์๋ ๊ฐ์ด ๋ณ๊ฒฝ๋์ง ์์๋ค๋ฉด ์ด์ ์ ๊ฐ์ ์ฌ์ฌ์ฉ.

      ```jsx
      // Example
      const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
      ```

  - ๊ทธ ์ธ
    - [useImperativeHandle](https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle)
    - [useLayoutEffect](https://ko.reactjs.org/docs/hooks-reference.html#uselayouteffect)
    - [useDebugValue](https://ko.reactjs.org/docs/hooks-reference.html#usedebugvalue)

- [custom hook](https://ko.reactjs.org/docs/hooks-custom.html)

### ๊ณ ์ฐจ ์ปดํฌ๋ํธ _React.memo_

- ์ค์ง ์ฑ๋ฅ ์ต์ ํ๋ฅผ ์ํด์๋ง ์ฌ์ฉ๋จ.
- `React.memo`๋ก ๊ฐ์ผ ์ปดํฌ๋ํธ๋ `props`์ ๋ณํ์๋ง ์ํฅ์ ๋ฐ์ ์ปดํฌ๋ํธ๋ฅผ ํญ์ ๋ ๋๋งํ์ง ์๊ณ  ๋ง์ง๋ง์ผ๋ก ๋ ๋๋ง๋ ๊ฒฐ๊ณผ๋ฅผ ์ฌ์ฌ์ฉํ๊ฑฐ๋, ํน์ `useState`, `useReducer`, `useContext` ์ฌ์ฉ ์ `state`๋ `context`๊ฐ ๋ณํ  ๋์๋ ๋ค์ ๋ ๋๋ง๋จ.
- ๊ธฐ๋ณธ์ ์ผ๋ก props๊ฐ ๊ฐ๋ ๊ฐ์ฒด์ ๋ํด ์์ ๋น๊ต๋ง ์ํํ๋ฏ๋ก ๋ค๋ฅธ ๋น๊ต ๋์์ ์ํ๋ค๋ฉด ๋๋ฒ์งธ ์ธ์๋ก ๋น๊ต ํจ์๋กค ์ ๊ณตํจ.

### Context API

- ๋ฆฌ์กํธ ์ปดํฌ๋ํธ ํธ๋ฆฌ ์์์ ์ ์ญ์ ์ผ๋ก ๋ฐ์ดํฐ(์: ๋ก๊ทธ์ธํ ์ ์ , ํ๋ง, ์ธ์ด)๋ฅผ ๊ณต์ ํ  ์ ์๋๋ก ๋ง๋ค์ด์ง.
- [React Context](https://ko.reactjs.org/docs/context.html)
- [์์ ](https://react.vlpt.us/basic/22-context-dispatch.html)

[โ Go to Top](#table-of-contents)

---

## ๐ฝ ๋ผ์ฐํฐ _react-router_

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

[โ Go to Top](#table-of-contents)

---

## ๐ฝ ์ํ๊ด๋ฆฌ (feat. Redux)

### ์ก์ _Action_

- ํ๋์ **๊ฐ์ฒด**๋ก ํํ.
- ์ํ(`state`)์ ์ด๋ ํ ๋ณํ๊ฐ ํ์ํ  ๋ ๋ฐ์.
- `type` ํ๋ ํ์.

### ์ก์ ์์ฑํจ์ _Action Creator_

- ์ก์์ ๋ง๋๋ **ํจ์**.
- ํ๋ผ๋ฏธํฐ๋ฅผ ๋ฐ์์์ ์ก์ ๊ฐ์ฒด ํํ๋ฅผ ๋ฐํ.
- redux ์ฌ์ฉ ์ ์ก์ ์์ฑํจ์ ์ฌ์ฉ์ด ํ์์ ์ด์ง ์์.

### ๋ฆฌ๋์ _Reducer_

- ๋ณํ๋ฅผ ์ผ์ผํค๋ **ํจ์**.
- `state`, `action`์ ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์์ `action type`์ ๋ฐ๋ผ ๋ณํ๋ `state`๊ฐ์ ๋ฐํ.
- `useReducer`์์  `default:` ๋ถ๋ถ์ ์๋ฌ๋ฅผ ๋ฐ์์ํค๋๋ก ํ์ง๋ง, redux์ ๋ฆฌ๋์๋ `state`๋ฅผ ๊ทธ๋๋ก ๋ฐํํ๋๋ก ์์ฑํด์ผ ํจ.
- redux๋ฅผ ์ฌ์ฉํ ๋๋ ์ฌ๋ฌ๊ฐ์ ๋ฆฌ๋์๋ฅผ ํฉ์ณ ๋ฃจํธ ๋ฆฌ๋์๋ฅผ ๋ง๋ค ์ ์์.

### ์คํ ์ด _Store_

- ํ์ฌ ์ฑ ์ํ์ ๋ฆฌ๋์, ์ถ๊ฐ์ ์ธ ๋ด์ฅ ํจ์๋ค์ ๋ชจ์.
- redux์์๋ ํ ์ดํ๋ฆฌ์ผ์ด์๋น ํ๋์ ์คํ ์ด๋ฅผ ๋ง๋ฌ.

### ๋์คํจ์น _dispatch_

- ์คํ ์ด ๋ด์ฅ**ํจ์** ์ค ํ๋๋ก, ์ก์์ ๋ฐ์์ํด.
- `dispatch`๋ผ๋ ํจ์์ `action`์ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌํ์ฌ ํธ์ถํ๋ฉด, ์คํ ์ด๊ฐ ๋ฆฌ๋์ ํจ์๋ฅผ ์คํ, ์ก์ ์ฒ๋ฆฌ ๋ก์ง์ ๋ฐ๋ผ ์ํ ์๋ฐ์ดํธ.

### ๊ตฌ๋ _subscribe_

- ์คํ ์ด์ ๋ด์ฅ**ํจ์** ์ค ํ๋๋ก, ํจ์ ํํ์ ๊ฐ์ ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์์ด.
- ์ก์์ด ๋์คํจ์น ๋์์ ๋ ๋ง๋ค `subscribe` ํจ์๋ก ์ ๋ฌ๋ ํจ์ ํธ์ถ.
- redux์์๋ ์ง์  ์ฌ์ฉํ  ์ผ์ด ์์ง๋ง, react-redux ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ ๊ณตํ๋ `connect` ํจ์ ํน์ `useSelector` ํ์ ์ด์ฉํ์ฌ ๋ฆฌ๋์ค ์คํ ์ด์ ์ํ์ ๊ตฌ๋.

### about **Redux**

- Redux์ Context API ์ฌ์ฉ์ ์ฐจ์ด์ 
  1. ๋ฏธ๋ค์จ์ด (Middleware)  
     : `reducer` ํจ์
  2. ์ ์ฉํ ํจ์์ Hooks  
     : `connect` ํจ์
  3. ํ๋์ ์ปค๋ค๋ Context๋ฅผ ์ฌ์ฉ  
     : redux์์๋ ๋ชจ๋  ๊ธ๋ก๋ฒ ์ํ๋ฅผ ํ๋์ ์ปค๋ค๋ ๊ฐ์ฒด์ ๋ฃ์ด์ ๊ด๋ฆฌ.  
     : Context API๋ ๊ธ๋ก๋ฒ ์ํ ๊ด๋ฆฌ๋ฅผ ํ  ๋ ์ผ๋ฐ์ ์ผ๋ก ๊ธฐ๋ฅ๋ณ๋ก Context๋ฅผ ๋ง๋ค์ด์ ์ฌ์ฉํจ.
- 3๊ฐ์ง ๊ท์น
  1. ํ๋์ ์ ํ๋ฆฌ์ผ์ด์ ์์๋ ํ๋์ ์คํ ์ด๋ง
  2. ์ํ(state)๋ ์ฝ๊ธฐ ์ ์ฉ์ผ๋ก ๋ถ๋ณ์ฑ ์ ์ง
  3. Reducer(๋ณํ๋ฅผ ์ผ์ผํค๋ ํจ์)๋ ์์ ํจ์์ฌ์ผ ํจ  
     == ๋๊ฐ์ ํ๋ผ๋ฏธํฐ๋ก ํธ์ถ๋ ๋ฆฌ๋์ ํจ์๋ ์ธ์ ๋ ๋๊ฐ์ ๊ฒฐ๊ณผ๊ฐ์ ๋ฐํ
- ๋ฆฌ๋์ค ๋ชจ๋
  - **์ก์ ํ์, ์ก์ฉ ์์ฑํจ์, ๋ฆฌ๋์**๋ฅผ ๋ชจ๋ ๋ค์ด์๋ ์๋ฐ์คํฌ๋ฆฝํธ ํ์ผ์ ์๋ฏธ
  - ๊ฐ๊ฐ ํญ๋ชฉ๋ค์ด ๋ถ๋ฆฌ๋์ด ์์ ์๋ ์์ง๋ง ์๋ก ๋ค๋ฅธ ๋๋ ํ ๋ฆฌ, ํ์ผ์ ๋ถ๋ฆฌ๋์ด์์ ํ์๋ ์์ โ ["Ducks ํจํด"](https://github.com/erikras/ducks-modular-redux)
  - ํ๋ก๋ฏธ์ค๋ฅผ ๋ค๋ฃจ๋ ๋ฆฌ๋์ค ๋ชจ๋์ ๋ค๋ฃฐ ๋,
    1. ํ๋ก๋ฏธ์ค๊ฐ ์์/์ฑ๊ณต/์คํจํ์ ๋ ๋ค๋ฅธ ์ก์์ ๋์คํจ์น
    2. ๊ฐ ํ๋ก๋ฏธ์ค๋ง๋ค thunk ํจ์ ์์ฑ
    3. ๋ฆฌ๋์์์ ์ก์์ ๋ฐ๋ผ ๋ก๋ฉ์ค/๊ฒฐ๊ณผ/์๋ฌ ์ํ๋ฅผ ๋ณ๊ฒฝ
- **Hooks**

  - [`useSelector`](https://react-redux.js.org/api/hooks#useselector)

    - redux ์คํ ์ด์์ ์ํ๋ฅผ ๋ฐํ

      ```jsx
      const result: any = useSelector(selector: Function, equalityFn?: Function)

      // Example
      const counter = useSelector((state) => state.counter);
      ```

  - [`useDispatch`](https://react-redux.js.org/api/hooks#usedispatch)
    - redux ์คํ ์ด์์ ๋์คํจ์น ํจ์ ๋ฐํ
    - ํน์  ์ก์ ๋์คํจ์น๋ฅผ ์ํด ์ฌ์ฉ
      ```jsx
      // (in component,)
      const dispatch = useDispatch();
      ...
      return <button onClick={() => dispatch({ type: 'INCREASE' })}> INCREASE </button>
      ...
      ```
  - ...

### [Redux Middleware](https://react.vlpt.us/redux-middleware/)

- \[์ก์\] โ **๋ฏธ๋ค์จ์ด** โ ๋ฆฌ๋์ โ \(์คํ ์ด\)
- ์ก์์ด ๋์ค๋งค์น ๋ ๋ค์, ๋ฆฌ๋์์์ ํด๋น ์ก์์ ๋ฐ์์ ์๋ฐ์ดํธ ํ๊ธฐ ์ ์ ์ถ๊ฐ์ ์ธ ์์์ด ๊ฐ๋ฅ  
  _(์: ํน์  ์กฐ๊ฑด์ ๋ฐ๋ผ ์ก์์ ๋ฌด์๋๊ฒ ํ๊ฑฐ๋, ์ก์์ ์ฝ์์ ์ถ๋ ฅํ๊ฑฐ๋ ์๋ฒ์ ๋ก๊น, ์ก์์ด ๋์คํจ์น ๋์ ๋ ์์ ํ์ฌ ๋ฆฌ๋์์ ์ ๋ฌ, ํน์ ์ก์ ๋ฐ์ ์ ๋ค๋ฅธ ์ก์ ๋ฐ์ ํน์ ํน์  ์๋ฐ์คํฌ๋ฆฝํธ ํจ์ ์คํ ๋ฑ)_
- ๋ฆฌ๋์ค์์์ ์ฃผ๋ ์ฌ์ฉ ์ฉ๋๋ API ์ฐ๋๊ณผ ๊ฐ์ ๋น๋๊ธฐ ์์ ์ฒ๋ฆฌ๋ฅผ ์ํจ.
- ๋น๋๊ธฐ ์์์ ๊ด๋ จ๋ ๋ฏธ๋ค์จ์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ: [`redux-thunk`](https://github.com/reduxjs/redux-thunk), [`redux-saga`](https://github.com/redux-saga/redux-saga), [`redux-observable`](https://redux-observable.js.org/), [`redux-promise-middleware`](https://www.npmjs.com/package/redux-promise-middleware)
- browser extension๊ณผ ํจ๊ป ์ฌ์ฉํ  ๋๋ [extensionโs options](https://www.npmjs.com/package/@redux-devtools/extension) ์ฐธ๊ณ 
- **redux-logger**

  - action ๋ฐ์ ์ ์ฝ์์ ๋ก๊น.
  - `createStore `๋ฅผ ํตํด ์คํ ์ด ์์ฑ์ `react-logger`์ `logger` ์ฌ์ฉํ๋ ๊ฒฝ์ฐ, `logger`๊ฐ ๊ฐ์ฅ ๋ง์ง๋ง์ ์์ผํจ.

    ```jsx
    ...
    const store = createStore(
      rootReducer,
      // logger ๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ, logger๊ฐ ๊ฐ์ฅ ๋ง์ง๋ง์ ์์ผํฉ๋๋ค.
      composeWithDevTools(applyMiddleware(ReduxThunk, logger))
    );
    ...
    ```

- **redux-thunk**
  - ํจ์๋ฅผ ๋์คํจ์น ํ  ์ ์๊ฒ ํด์ฃผ๋ ๋ฏธ๋ค์จ์ด.
- **redux-saga**
  - ์ก์์ ๋ชจ๋ํฐ๋งํ๋ค๊ฐ ํน์  ์ก์์ด ๋ฐ์ํ๋ฉด ์ด์ ๋ฐ๋ผ ํน์  ์์์ ํ๋๋ก ์ฌ์ฉ.
  - ๋น๋๊ธฐ ์์ ์ ๊ธฐ์กด ์์ฒญ์ ์ทจ์ ์ฒ๋ฆฌํ๊ฑฐ๋ ํน์  ์ก์ ๋ฐ์ ์ ๋ค๋ฅธ ์ก์ ๋์คํจ์น ์ฒ๋ฆฌ ํน์ JS ์ฝ๋ ์คํ, API ์์ฒญ ์คํจ ์ ์ฌ์์ฒญ ๋ฑ
  - [Gernerator ๋ฌธ๋ฒ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator) ์์ฉ (`function*`)
  - **effects** (util functions `from 'react-saga/effects'`)
    - `all`: ๋ฐฐ์ด ์์ ์ฌ๋ฌ ์ฌ๊ฐ๋ฅผ ๋์์ ์คํ.
      ```jsx
      yield all([counterSaga(), postsSaga()]);
      ```
    - `call`: ๋๋ฒ์งธ ์ธ์๋ถํฐ์ ํ๋ผ๋ฏธํฐ๋ฅผ ์ฌ์ฉํ์ฌ ์ฒซ๋ฒ์งธ ์ธ์์ ํจ์ ์คํ
      ```jsx
      const post = yield call(postsAPI.getPostById, param);
      // API ํจ์์ ๋ฃ์ด์ฃผ๊ณ  ์ถ์ ์ธ์๋ call ํจ์์ ๋๋ฒ์งธ ์ธ์๋ถํฐ ์์๋๋ก ์ ๋ฌ.
      ```
    - `put`: ํน์  ์ก์์ ๋์คํจ์น
    - `take`
      - `takeEvery`: ํน์  ์ก์ ํ์์ ๋ํด ๋์คํจ์น๋๋ ๋ชจ๋  ์ก์์ ์ฒ๋ฆฌ
      - `takeLatest`: ํน์  ์ก์ ํ์์ ๋ํด ๋์คํจ์น๋ ๊ฐ์ฅ ๋ง์ง๋ง ์ก์๋ง์ ์ฒ๋ฆฌ
    - `getContext`: saga ์ปจํ์คํธ์ ํน์  ์์ฑ ๋ฐํ
    - ...

[โ Go to Top](#table-of-contents)

---

## Typescript+

### install typescript with CRA

- [์ฐธ๊ณ  ๋ฌธ์](https://create-react-app.dev/docs/adding-typescript/#installation)

- ํ์์คํฌ๋ฆฝํธ ์ค์ ์ด ์ ์ฉ๋ ํ๋ก์ ํธ ์์ฑ

  ```shell
  npx create-react-app my-app --template typescript
  ```

  ```shell
  yarn create react-app my-app --template typescript
  ```

- ์์ฑ๋ ํ์ผ์ ํ์์คํธ๋ฆฝํธ ์ค์น

  ```shell
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

  ```shell
  yarn add typescript @types/node @types/react @types/react-dom @types/jest
  ```

### tsconfig.json

- _Example_
  - `"compileOptions":`
    - `"target": "es5",` ------------- ์ปดํ์ผ๋ ์ฝ๋๊ฐ ์คํ๋  ํ๊ฒฝ
    - `"module": "commonjs",` ------- ์ปดํ์ผ์ ์ฌ์ฉํ  ๋ชจ๋ ์์คํ
    - `"strict": true,` -------------- ๋ชจ๋  ํ์ ์ฒดํน ํ์ฑํ ์ฌ๋ถ
    - `"exModuleInterop": true,` --- [(์ฐธ๊ณ )](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file)
    - `"outDir": "./dist"` ---------- ์ปดํ์ผ๋ ํ์ผ ์ ์ฅ ๊ฒฝ๋ก
- ํ์ ์ ์

  ```ts
  // ๊ธฐ๋ณธ ํ์
  const numbers: number[] = [1, 2, 3];
  const messages: string[] = ['hello', 'world'];
  let mightBeUndefined: string | undefined = undefined;
  let nullableNumber: number | null = null;
  let color: 'red' | 'orange' | 'yellow' = 'red';

  // ํจ์์์ ํ์ ์ ์
  function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  function returnNothing(): void {
    console.log("I'm just saying hello world");
  }
  ```

- ์ธํฐํ์ด์ค๋ก ์ผ๋ฐ ๊ฐ์ฒด ํ์ ์ ์

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

  type People = Person[]; // Type Alias ์ฌ์ฉ
  const people: People = [person, expert];
  ```

- Generics

  - ์ ๋๋ฆญ(Generics)์ ํ์์คํฌ๋ฆฝํธ์์ ํจ์, ํด๋์ค, interface, type alias ๋ฅผ ์ฌ์ฉํ๊ฒ ๋  ๋ ์ฌ๋ฌ ์ข๋ฅ์ ํ์์ ๋ํด ํธํ์ ๋ง์ถฐ์ผํ๋ ์ํฉ์์ ์ฌ์ฉ

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

[CondeSandbox์์ 8์ฅ ์ค์ต์ฝ๋ ํ์ธ](https://codesandbox.io/s/react-study-with-vlpt--typescript-oxe7q3?file=/src/App.tsx)

---

[โ Go to Top](#table-of-contents)
