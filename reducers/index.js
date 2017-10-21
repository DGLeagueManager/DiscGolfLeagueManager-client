import { combineReducers } from 'redux';
import auth from './auth';
import scoreCounterReducer from './scoreCounterReducer';
import applicationReducer from './applicationReducer';
import adminRoundConfigStartReducer from './adminRoundConfigStartReducer';

const rootReducer = combineReducers({ 
  auth, 
  scoreCounterReducer, 
  applicationReducer, 
  adminRoundConfigStartReducer 
});

export default rootReducer;
