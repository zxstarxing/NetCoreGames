import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';
import games from '../reducers/games';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

export default function configureStore(history, initialState) {
  const reducers = {
    games,
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
  };

  const middleware = [
    thunk,
    routerMiddleware(history),
    promise()
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const devLogger = []; 
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
    devLogger.push(logger);
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware,...devLogger), ...enhancers)
  );
}
