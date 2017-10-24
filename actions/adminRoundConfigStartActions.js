
module.exports.addPlayersToRound = (amPlayers, proPlayers, cards) => {
  console.log('add players to round started')
  return {
    type: 'ADD_PLAYERS_TO_ROUND', 
    payload: {
      amPlayers: amPlayers, 
      proPlayers: proPlayers, 
      cards: cards
    }
  }
}

module.exports.addPlayerToRound = ( player ) => {
  return {
    type: 'ADD_PLAYER_TO_ROUND',
    payload: player
  }
}

module.exports.addEmptyCards = ( cards ) => {
  return {
    type: 'ADD_EMPTY_CARDS_TO_NEW_ROUND',
    payload: cards
  }
}