import { combineReducers } from 'redux';
import MainNavReducer from './MainNavReducer';

function testFormCounter(state = 0, action) {
    console.log(state)
    switch(action.type) {
        case 'INCREMENT':
          var newState = state + 1;
          return newState;
        default:  
          return state;
    }
    return state;
}

const rootReducer = combineReducers({ testFormCounter, MainNavReducer });
export default rootReducer;
