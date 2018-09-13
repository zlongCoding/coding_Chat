import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import routes from './router/routes';
import reducers from './store';

function createStore(history, preloadedState = {}) {
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [
    routerMiddleware(history),
    reduxThunk,
  ];

  const store = createReduxStore(
    connectRouter(history)(combineReducers(reducers)),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return {
    store,
    history,
    routes,
  };
}

export default createStore;
