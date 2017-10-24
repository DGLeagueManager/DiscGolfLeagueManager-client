export default function reducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_STARTING_HOLE":
      return Object.assign({}, state, {
        cards: state.currentRound.cards.map((card, index) => {
          if (index===action.payload.cardIndex) {
            return Object.assign({}, card, {
              startingHole: action.payload.newStartingHole
            })
          }
        })
      });

    default:
      return state;
  }
}
