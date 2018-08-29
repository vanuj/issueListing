import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// import the root reducer
import rootReducer from './reducers/index';

const history = createBrowserHistory();

const defaultState = {
  issues:[]
};

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState, 
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    )
  )
);

export default store;
export { history };

