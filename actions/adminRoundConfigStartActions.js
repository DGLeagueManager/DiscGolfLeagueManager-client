
module.exports.addPlayersToRound = (amPlayers, proPlayers) => {
  console.log('add players to round started')
  return {type: 'ADD_PLAYERS_TO_ROUND', payload: {amPlayers: amPlayers, proPlayers: proPlayers}}
}