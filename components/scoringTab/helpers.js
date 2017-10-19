module.exports.generateScoreCard = function(cardInfo) {
  var { startingHole, numberOfHoles } = cardInfo;
  console.log(startingHole)
  var scoreCard = [];
  for (var i = startingHole; i <= numberOfHoles; i++) {
    scoreCard.push(i);
  }
  if (startingHole > 1) {
    for (var i = 1; i < startingHole; i++) {
      scoreCard.push(i);
    }
  }
  return scoreCard;
}

module.exports.generateTabs = function(scoreCard, holesCompleted) {
  scoreCard.map((hole, idx) => {
    if( idx <= holesCompleted )
    tabs[hole] = {
      screen: hole,
      navigationOptions: {
        tabBarLabel: 'Hole ' + hole
      }
    }
  })
}

var cardInfo = {
  startingHole: 6,
  holesCompleted: 5,
  numberOfHoles: 18,
  players: [101, 105, 228, 308],
  player_rounds: {
    player_id: {
      totalStrokes: 12,
      scoreRelativeToPar: 0,
      thruHole: 5,
      1: 3,
      2: 4,
      3: 3,
      4: 2,
      5: 3
    },
    player2_id: {
      totalStrokes: 14,
      scoreRelativeToPar: 2,
      thruHole: 5,
      1: 3,
      2: 4,
      3: 3,
      4: 2,
      5: 3
    },
  }
}
