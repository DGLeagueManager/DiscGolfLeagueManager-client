import axios from "axios";

module.exports.getLeagueData = () => {
  console.log("fetching league data...");
  return dispatch => {
    dispatch({ type: "FETCH_LEAGUE_DATA_INITIATED" });

    axios
      .get("http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/getLeagueDataByUser")
      .then(response => {
        dispatch({ type: "LEAGE_DATA_RETURNED", payload: response })
      })
      .catch(error => dispatch({ type: "LEAGUE_DATA_FAILED", error: error }));
  };
};
