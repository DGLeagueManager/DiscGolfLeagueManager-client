import axios from 'axios';

module.exports.signUp = (first_name, last_name, email, password) => {
	console.log('signUp method invoked')
	return (dispatch) => {
		dispatch({ type: 'SIGNUP_STARTED' });

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/addPlayer', { first_name, last_name, email, password })
			.then(response => dispatch({ type: 'SIGNUP_SUCCEEDED', payload: response }))
			.catch(error => dispatch({ type: 'SIGNUP_FAILED', error: error }))    
	};
}

module.exports.login = (email, password) => {
	
	return (dispatch) => {
		dispatch({ type: 'LOGIN_STARTED' });

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/login', { email, password })
			.then(response => dispatch({ type: 'LOGIN_SUCCEEDED', payload: response }))
			.catch(error => dispatch({ type: 'LOGIN_FAILED', error: error }))    
	};
}





