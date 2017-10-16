import axios from 'axios';

export const signUp = (firstName, lastName, email, password) => {
	return (dispatch) => {
		dispatch({ type: 'REQUEST_STARTED' });

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/api/addPlayer', { firstName, lastName, email, password })
			.then(response => dispatch({ type: 'REQUEST_SUCCEEDED', payload: response }))
			.catch(error => dispatch({ type: 'REQUEST_FAILED', error: error }))    
	};
}

