import axios from 'axios';

export const signUp = (first_name, last_name, email, password) => {
	
	return (dispatch) => {
		console.log('here')
		dispatch({ type: 'REQUEST_STARTED' });

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/addPlayer', { first_name, last_name, email, password })
			.then( response => {
				dispatch({ type: 'REQUEST_SUCCEEDED', payload: response })
			})
			.catch(error => dispatch({ type: 'REQUEST_FAILED', error: error }))    
	};
}

