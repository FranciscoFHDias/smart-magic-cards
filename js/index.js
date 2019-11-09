const cardsWrapper = document.querySelector('.cards-wrapper');

function createCards() {
  const cards = [];
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
  cards.forEach((card, i) => {
    const positionFromLeft = i * 15;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
