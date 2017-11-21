export default function reducer(state = {}, action) {
	switch (action.type) {
	case 'POST_NEW_ROUND_STARTED':
		return Object.assign({}, state, {})
    
	case 'POST_NEW_ROUND_SUCCEEDED':
		return Object.assign({}, state, {
			roundInProgress: true
		})
    
	case 'POST_NEW_ROUND_FAILED':
		return Object.assign({}, state, {
			error: action.error
		})
    
	default:
		return state
	}
}
