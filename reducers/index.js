import { combineReducers } from 'redux'
import auth from './auth'
import applicationReducer from './applicationReducer'
import adminRoundConfigStartReducer from './adminRoundConfigStartReducer'
import playerSelectionReducer from './playerSelectionReducer'
import newRoundReducer from './newRoundReducer'
import scoreKeeperSelectionReducer from './scoreKeeperSelectionReducer'
import getCurrentRoundDataReducer from './getCurrentRoundDataReducer'

const rootReducer = combineReducers({ 
	auth, 
	applicationReducer, 
	adminRoundConfigStartReducer,
	playerSelectionReducer,
	newRoundReducer,
	scoreKeeperSelectionReducer,
	getCurrentRoundDataReducer
})

export default rootReducer
