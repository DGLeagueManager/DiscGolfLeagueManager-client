import { combineReducers } from 'redux';
import auth from './auth';
import scoreCounterReducer from './scoreCounterReducer';


const rootReducer = combineReducers({ auth, scoreCounterReducer });
export default rootReducer;
