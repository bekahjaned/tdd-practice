function dealCards(playerHand) {
  playerHand += 7;
  return playerHand;
}

module.exports = dealCards;

// -------------------------------

function firstDeal(deck) {
  deck -= 7;
  return deck;
}

module.exports = firstDeal;

// -------------------------------

function goFish(playerHand) {
  playerHand += 1;
  return playerHand;
}

module.exports = goFish;

// -------------------------------

function checkMatch(playerHand) {
  for (let i = 0; i < playerHand.length; i++) {
    for (let j = i + 1; j < playerHand.length; j++) {
      if (playerHand[i] === playerHand[j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = checkMatch;

// -------------------------------

function askForCard(askedCard = null, player2Hand = []) {
  if (player2Hand.includes(askedCard)) {
    return true;
  }
  return false;
}

module.exports = askForCard;
