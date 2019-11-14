const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');
const cards = [];

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'hearts',
    };
    cards.push(cardObject);
  }

  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'spades',
    };
    cards.push(cardObject);
  }

  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'diamonds',
    };
    cards.push(cardObject);
  }

  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'clubs',
    };
    cards.push(cardObject);
  }
  // For each dataObject, create a new card and append it to the DOM
}

function placeCards(cardsArray) {
  cardsArray.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}
// Function to clear out the initial button and create new buttons to play the game.
function createBtnShuffle() {
  const btnShuffle = document.createElement('button');
  btnShuffle.style.margin = '0px, 5px, 0px, 5px';
  btnShuffle.classList.add('btn', 'btn-lg', 'btn-secondary');
  btnShuffle.setAttribute('id', 'shuffle-game');
  btnShuffle.innerHTML = 'Shuffle';
  buttonWrapper.append(btnShuffle);
}

function createBtnShow() {
  const btnShow = document.createElement('button');
  btnShow.style.margin = '0px, 5px, 0px, 5px';
  btnShow.classList.add('btn', 'btn-lg', 'btn-secondary');
  btnShow.setAttribute('id', 'show-game');
  btnShow.innerHTML = 'Show/Hide';
  buttonWrapper.append(btnShow);
}

function createBtnMagic() {
  const btnMagic = document.createElement('button');
  btnMagic.classList.add('btn', 'btn-lg', 'btn-secondary');
  btnMagic.setAttribute('id', 'magic-game');
  btnMagic.innerHTML = 'Magic';
  buttonWrapper.append(btnMagic);
}

function clearCards() {
  let card = cardsWrapper.lastElementChild;
  while (card) {
    cardsWrapper.removeChild(card);
    card = cardsWrapper.lastElementChild;
  }
}

function shuffleCards() {
  setTimeout(() => {
    cardsWrapper.classList.add('shuffling');
  });
  clearCards();
  const cardsShuffled = [...cards];
  placeCards(cardsShuffled.sort(() => Math.random() - 0.5));
  setTimeout(() => {
    cardsWrapper.classList.remove('shuffling');
  }, 1000);
}

function magicCards() {
  setTimeout(() => {
    cardsWrapper.classList.add('shuffling');
  });
  clearCards();
  placeCards(cards);
  setTimeout(() => {
    cardsWrapper.classList.remove('shuffling');
  }, 1000);
}

function createButtons() {
  document.getElementById('start-game').style.display = 'none';
  createBtnShuffle();
  createBtnShow();
  createBtnMagic();
  document.getElementById('shuffle-game').addEventListener('click', shuffleCards);
  document.getElementById('show-game').addEventListener('click', () => (!cardsWrapper.classList.contains('hidden') ? cardsWrapper.classList.add('hidden') : cardsWrapper.classList.remove('hidden')));
  document.getElementById('magic-game').addEventListener('click', magicCards);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createCards();
  createButtons();
  placeCards(cards);
}

document.getElementById('start-game').addEventListener('click', startGame);
