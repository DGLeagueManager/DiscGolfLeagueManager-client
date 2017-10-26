module.exports.createNewRound = (course) => {
  console.log('course being ent: ', course)
  return  {
    type: "CREATE_NEW_ROUND",
    payload: course
  };
};