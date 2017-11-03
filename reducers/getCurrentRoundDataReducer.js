export default function reducer(state = {}, action) {
  switch (action.type) {
    case "GET_CURRENT_ROUND_STARTED":
      return state;
    case "GET_CURRENT_ROUND_SUCCEEDED":
      let playerId = action.payload.playerId;
      let cardsArray = action.payload.response.cards;

      let myCard = cardsArray.find((card) => {
        return card.players.find((player) => {
          return player._id === playerId
        });
      });
      
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
      const holeNumber = action.payload.holeNum;

      for (var key in scoresObj) {
        if (key === action.payload.playerId) {
          var playerScores = scoresObj[key];
        }
      }

      if (playerScores.scores[holeNumber].score === null) {
        playerScores.scores[holeNumber].score = playerScores.scores[holeNumber].par;
      }
      
      playerScores.scores[holeNumber].score++;
      playerScores.scores[holeNumber].scoreRelativeToPar = playerScores.scores[holeNumber].score - playerScores.scores[holeNumber].par;

      playerScores.totalStrokes = Object.keys(playerScores.scores).reduce((totalStrokes, key) => {
        return totalStrokes += playerScores.scores[key].score;
      }, 0);

      var scoreRelativeToPar = Object.keys(playerScores.scores).reduce(
        (scoreRelativeToPar, key) => {
          if (playerScores.scores[key].scoreRelativeToPar){
           return (scoreRelativeToPar += playerScores.scores[key].scoreRelativeToPar);
          } else {
            return scoreRelativeToPar;
          }      
        }, 0);

      if (scoreRelativeToPar === 0) {
        playerScores.scoreRelativeToPar = 'E'
      } else if (scoreRelativeToPar > 0) {
        playerScores.scoreRelativeToPar = '+' + scoreRelativeToPar.toString();
      } else {
        playerScores.scoreRelativeToPar = scoreRelativeToPar.toString();
      }

      playerScores.thru = Object.keys(playerScores.scores).reduce((thru, key) =>{
        if (playerScores.scores[key].score) {
          return thru++
        } else {
          return thru;
        }
      })

      console.log('************ !!!!!!!!!!! ', scoresObj)
      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scoresObj
        }
      });
    case "DECREMENT_PLAYER_SCORE":
      scoresObj = Object.assign({}, state.currentRound.scores);
      holeNumber = action.payload.holeNum;

      for (var key in scoresObj) {
        if (key === action.payload.playerId) {
          var playerScores = scoresObj[key];
        }
      }

      if (playerScores.scores[holeNumber].score === null) {
        playerScores.scores[holeNumber].score = playerScores.scores[holeNumber].par;
      }

      playerScores.scores[holeNumber].score--;
      playerScores.scores[holeNumber].scoreRelativeToPar = playerScores.scores[holeNumber].score - playerScores.scores[holeNumber].par;

      playerScores.totalStrokes = Object.keys(playerScores.scores).reduce(
        (totalStrokes, key) => {
          return (totalStrokes += playerScores.scores[key].score);
        },
        0
      );

      var scoreRelativeToPar = Object.keys(playerScores.scores).reduce(
        (scoreRelativeToPar, key) => {
          if (playerScores.scores[key].scoreRelativeToPar) {
            return (scoreRelativeToPar +=
              playerScores.scores[key].scoreRelativeToPar);
          } else {
            return scoreRelativeToPar;
          }
        },
        0
      );

      if (scoreRelativeToPar === 0) {
        playerScores.scoreRelativeToPar = "E";
      } else if (scoreRelativeToPar > 0) {
        playerScores.scoreRelativeToPar = "+" + scoreRelativeToPar.toString();
      } else {
        playerScores.scoreRelativeToPar = scoreRelativeToPar.toString();
      }

      playerScores.thru = Object.keys(playerScores.scores).reduce(
        (thru, key) => {
          if (playerScores.scores[key].score) {
            return thru++;
          } else {
            return thru;
          }
        }, 
        0
      );

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
