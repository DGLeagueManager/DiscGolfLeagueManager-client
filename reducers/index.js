import { combineReducers } from 'redux';
import auth from './auth';
import scoreCounterReducer from './scoreCounterReducer';
import applicationReducer from './applicationReducer';


const rootReducer = combineReducers({ auth, scoreCounterReducer, applicationReducer });
export default rootReducer;
