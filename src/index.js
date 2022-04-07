import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './module';

const store = createStore(rootReducer);
// console.log(store.getState());
// > JSON.stringify(store.getState(), null, 2)
// {
//   "counter": {
//     "number": 0,
//     "diff": 1
//   },
//   "todos": [
//     {
//       "id": 1,
//       "text": "example",
//       "done": false
//     }
//   ]
// }

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
