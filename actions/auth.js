import axios from 'axios';

export const signUp = (first_name, last_name, email, password) => {
	
	return (dispatch) => {
		dispatch({ type: 'REQUEST_STARTED' });

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/addPlayer', { first_name, last_name, email, password })
<<<<<<< HEAD
			.then(response => dispatch({ type: 'REQUEST_SUCCEEDED', payload: response }))
=======
			.then( response => {
				dispatch({ type: 'REQUEST_SUCCEEDED', payload: response })
			})
>>>>>>> 60a69ca292db858e920990c39b2ce161a4f9303e
			.catch(error => dispatch({ type: 'REQUEST_FAILED', error: error }))    
	};
}

