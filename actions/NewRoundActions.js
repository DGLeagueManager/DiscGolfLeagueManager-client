module.exports.createNewRound = (course) => {
	return  {
		type: 'CREATE_NEW_ROUND',
		payload: course
	}
}