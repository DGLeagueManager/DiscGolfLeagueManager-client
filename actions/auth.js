import axios from 'axios';

module.exports.signUp = (first_name, last_name, email, password) => {

	return (dispatch) => {
		dispatch({ type: 'SIGNUP_STARTED' });

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/addPlayer', { first_name, last_name, email, password })
			.then((response) => {dispatch(loginSuccess(response))},
			(error) => dispatch(loginFailed(error)))
	};
}

const loginSuccess = function(payload) {
	return({
		type: 'LOGIN_SUCCEEDED',
		payload: payload
	});
}

const loginFailed = function(err) {
	return({
		type: 'LOGIN_FAILED',
		payload: err
	});
}

module.exports.login = (email, password) => {

	return (dispatch) => {
		dispatch({ type: 'LOGIN_STARTED' });
		return axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/login', { email, password })
			.then((response) => {dispatch(loginSuccess(response))},
			(error) => {
				dispatch(loginFailed(error));
			})
	};
}
