import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function;
  }
}

const store = createStore(
  combineReducers({
    rootReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
