import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import routes from './routes';
import {Router} from "react-router-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { history } from './history.js'

// Store & Api
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducers';
import sagaWatcher from './sagas/sagas';
import {ActionType} from './store/action-types';

// Components
const composeEnhancers = typeof window === 'undefined' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware  = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagaWatcher);
const action = type => store.dispatch({type});
action(ActionType.FETCH_INITIAL_DATA);



ReactDOM.render(
  <React.StrictMode>
    <Provider {...{store}}>
      <Router {...{history}}>
        {routes}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

