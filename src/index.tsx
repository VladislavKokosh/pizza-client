import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./store/reducers/reducer";
import rootSaga from "./store/saga";

const saga = createSagaMiddleware();
const store = createStore(reducer,composeWithDevTools(applyMiddleware(saga)))
saga.run(rootSaga)

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
