import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from '@redux-devtools/extension';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware,
      logger
    )
  )
);

sagaMiddleware.run(rootSaga); // 스토어 생성 후 루트 사가 실행

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HistoryRouter history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </HistoryRouter>
);
