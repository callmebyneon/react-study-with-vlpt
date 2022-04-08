import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter,
  // unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { composeWithDevTools } from '@redux-devtools/extension';

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
