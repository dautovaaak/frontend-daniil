import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reducers from './reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  reducers: reducers,
});

export default rootReducer;