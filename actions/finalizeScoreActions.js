import axios from 'axios'

module.exports.submitFinalizedCard = (newRound) => {
	return (dispatch) => {
		dispatch({ type: 'POST_FINALIZED_CARD_STARTED' })

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/createRound', newRound)
			.then((response) => {
				dispatch({ type: 'POST_FINALIZED_CARD_SUCCEEDED', payload: response })
			})
			.catch(error => dispatch({ type: 'POST_FINALIZED_CARD_FAILED', error: error }))
	}
}