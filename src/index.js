import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './module';

import { composeWithDevTools } from '@redux-devtools/extension';
/** (redux-devtools-extension) Package moved to @redux-devtools/extension.
 * Chrome extension: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
 * npm (@redux-devtools/extension): https://www.npmjs.com/package/@redux-devtools/extension
 */

const store = createStore(rootReducer, composeWithDevTools());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
