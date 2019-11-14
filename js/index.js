const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');
const buttons = ['Shuffle', 'Show/Hide', 'Magic'];
const cards = [];

// Create an array with objects containing the value and the suit of each card
function createCards() {
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
}

// For each dataObject, create a new card and append it to the DOM
function placeCards(cardsArray) {
  cardsArray.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardElement.style.backgroundImage = `url("../assets/cards/${card.suit}-${card.value}.svg")`;
    cardsWrapper.append(cardElement);
  });
}

function clearCards() {
  let card = cardsWrapper.lastElementChild;
  while (card) {
    cardsWrapper.removeChild(card);
    card = cardsWrapper.lastElementChild;
  }
}

function sortCards(a) {
  setTimeout(() => {
    cardsWrapper.classList.add('shuffling');
  });
  clearCards();
  placeCards(a);
  setTimeout(() => {
    cardsWrapper.classList.remove('shuffling');
  }, 1000);
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  document.getElementById('start-game').style.display = 'none';
  buttons.forEach((button) => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-lg', 'btn-secondary');
    btn.setAttribute('id', `${button}-game`);
    btn.innerHTML = `${button}`;
    buttonWrapper.append(btn);
  });
  document.getElementById('Shuffle-game').addEventListener('click', () => sortCards([...cards].sort(() => Math.random() - 0.5)));
  document.getElementById('Show/Hide-game').addEventListener('click', () => (!cardsWrapper.classList.contains('hidden') ? cardsWrapper.classList.add('hidden') : cardsWrapper.classList.remove('hidden')));
  document.getElementById('Magic-game').addEventListener('click', () => sortCards(cards));
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createCards();
  createButtons();
  placeCards(cards);
}

document.getElementById('start-game').addEventListener('click', startGame);
