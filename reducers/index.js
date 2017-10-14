import { combineReducers } from 'redux';



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

const rootReducer = combineReducers({ testFormCounter });
export default rootReducer;
