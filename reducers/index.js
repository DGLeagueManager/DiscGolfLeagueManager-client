import { combineReducers } from 'redux';
import auth from './auth';
import scoreCounterReducer from './scoreCounterReducer';
import applicationReducer from './applicationReducer';
import adminRoundConfigStartReducer from './adminRoundConfigStartReducer';
import playerSelectionReducer from './playerSelectionReducer';
import newRoundReducer from './newRoundReducer';

const rootReducer = combineReducers({ 
  auth, 
  scoreCounterReducer, 
  applicationReducer, 
  adminRoundConfigStartReducer,
  playerSelectionReducer,
  newRoundReducer
});

export default rootReducer;
