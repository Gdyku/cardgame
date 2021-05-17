import Deck from "./Game.js";

const Card_Value_Map = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const computerCardSlot = document.querySelector(".computer-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerCardSlot = document.querySelector(".player-card-slot");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck, computerDeck, inRound, stop;

document.addEventListener("click", () => {
  if (stop) {
    startGame();
    return;
  }

  if (inRound) {
    cleanBeforeRound();
  } else {
    flipCards();
  }
});

startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
  inRound = false;
  stop = false;

  cleanBeforeRound();
}

function cleanBeforeRound() {
  inRound = false;
  text.innerHTML = "";
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";

  updateDeckCount();
}

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards;
  playerDeckElement.innerText = playerDeck.numberOfCards;
}

function flipCards() {
  inRound = true;

  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.appendChild(playerCard.getHTML());
  computerCardSlot.appendChild(computerCard.getHTML());

  updateDeckCount();

  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = "Win";
    playerDeck.push(playerCard);
    playerDeck.push(computerCard);
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = "Lose";
    computerDeck.push(computerCard);
    computerDeck.push(playerCard);
  } else {
    text.innerText = "War";
    War(playerCard, computerCard);
  }

  if (isGameOver(playerDeck)) {
    text.innerText = "You Lose";
    stop = true;
  } else if (isGameOver(computerCard)) {
    text.innerText = "You Win";
    stop = true;
  }
}

function isRoundWinner(cardOne, cardTwo) {
  return Card_Value_Map[cardOne.value] > Card_Value_Map[cardTwo.value];
}

function isGameOver(deck) {
  if (deck.numberOfCards === 0);
}

function War(playerCard, computerCard) {
  const playerMiddleCard = playerDeck.pop();
  const computerMiddleCard = computerDeck.pop();
  playerCardSlot.appendChild(playerMiddleCard.getHTML());
  computerCardSlot.appendChild(computerMiddleCard.getHTML());
  const playerTopCard = playerDeck.pop();
  const computerTopCard = computerDeck.pop();
  playerCardSlot.appendChild(playerTopCard.getHTML());
  computerCardSlot.appendChild(computerTopCard.getHTML());
  if (isRoundWinner(playerTopCard, computerTopCard)) {
    text.innerText = "War";
    playerDeck.push(playerCard, playerMiddleCard, playerTopCard);
    playerDeck.push(computerCard, computerMiddleCard, computerTopCard);
  } else if (isRoundWinner(computerTopCard, playerTopCard)) {
    text.innerText = "War";
    computerDeck.push(playerCard, playerMiddleCard, playerTopCard);
    computerDeck.push(computerCard, computerMiddleCard, computerTopCard);
  }
}
