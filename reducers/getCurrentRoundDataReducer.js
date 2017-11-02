export default function reducer(state = {}, action) {
  switch (action.type) {
    case "GET_CURRENT_ROUND_STARTED":
      return state;
    case "GET_CURRENT_ROUND_SUCCEEDED":
      console.log('get current round succeeded payload: ', action.payload)
      let playerId = action.payload.playerId;
      let cardsArray = action.payload.response.cards;

      let myCard = cardsArray.find((card) => {
        return card.players.find((player) => {
          return player._id === playerId
        });
      });

      // let myCard = null;

      // for (var key in cardsObject) {
      //   for (var player of cardsObject[key].players) {
      //     if (player._id === playerId) {
      //       myCard = cardsObject[key];
      //       break;
      //     }
      //   }
      // }
      
      console.log("ROUND IN PROGRESS IN REDUCER: ", action.payload.response.in_progress);
      let isScoreKeeper = myCard ? myCard.score_keeper === playerId : false;
      return Object.assign({}, state, {
        currentRoundInProgress: action.payload.response.in_progress,
        currentRound: action.payload.response,
        currentCard: myCard || null,
        isScoreKeeper: isScoreKeeper,
        scores: action.payload.response.scores
      });
    case "GET_CURRENT_ROUND_FAILED":
      return Object.assign({}, state, { error: action.error });
    case "INCREMENT_PLAYER_SCORE":
      const scoresObj = Object.assign({}, state.currentRound.scores);

      for (var key in scoresObj) {
        if (key === action.payload.playerId) {
          if (scoresObj[key][action.payload.holeNum].score === null) {
            scoresObj[key][action.payload.holeNum].score = scoresObj[key][action.payload.holeNum].par;
          }
          scoresObj[key][action.payload.holeNum].score++;
          scoresObj[key][action.payload.holeNum].scoreRelativeToPar = scoresObj[key][action.payload.holeNum].score - scoresObj[key][action.payload.holeNum].par;
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scoresObj
        }
      });
    case "DECREMENT_PLAYER_SCORE":
      scoresObj = Object.assign({}, state.currentRound.scores);

      for (var key in scoresObj) {
        if (key === action.payload.playerId) {
          if (scoresObj[key][action.payload.holeNum].score === null) {
            scoresObj[key][action.payload.holeNum].score = scoresObj[key][action.payload.holeNum].par;
          }
          scoresObj[key][action.payload.holeNum].score--;
          scoresObj[key][action.payload.holeNum].scoreRelativeToPar = scoresObj[key][action.payload.holeNum].score - scoresObj[key][action.payload.holeNum].par;
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scoresObj
        }
      });
    case "SCORES_GETTING_POSTED":
      console.log("Scores Getting Posted: *******", action.payload);
      return Object.assign({}, state, {});
    case "SCORES_POST_SUCCEEDED":
      return Object.assign({}, state, { currentRound: action.payload });
    case "SCORES_POST_FAILED":
      return Object.assign({}, state, { error: action.error });
    case "GET_LEAGUE_DATA_SUCCEEDED":
      const leagueData = action.payload.data;
      const currentRound = leagueData.seasons[0].rounds.find(round => {
        return round.completed === false;
      });
      return Object.assign({}, state, {
        currentRound: currentRound,
      });
    default:
      return state;
  }
}