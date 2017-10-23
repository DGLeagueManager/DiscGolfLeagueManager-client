export default function reducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_STARTING_HOLE":
    console.log(state)
      return Object.assign({}, state, {
        cards: state.currentRound.cards.map((card, index) => {
          if (index===action.payload.cardIndex) {
            return Object.assign({}, card, {
              startingHole: action.payload.newStartingHole
            })
          }
        })
      });


    case "ADD_PLAYER_TO_CARD":
      console.log("payload: ", payload);
      return Object.assign({}, state, {
        // TODO: debug the below error
        // cards[action.payload.cardIndes].players: [...cards[i].players, action.payload.player]});
      });
    default:
      return state;
  }
}
