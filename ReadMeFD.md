# Project Execution

## Approach

- I tackle the exercise in the following order:
  1. Read and understood the different documents and tests,
  2. Addressed point by point in the requirement/bonus lists and tested before moving to the next point,
  3. Improved the styles slightly and researched ways to overcome challenges with transitions.
  4. Refactoring the code

## Time

- 2 hours in total (excluding Read.me)

### Logic to create buttons

Example for the 'Shuffle' button:

```js
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
```

### Logic to create cards

```js
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
```

### Logic to shuffle and order the cards again

```js
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
```

> Shuffled

```js
document.getElementById('Shuffle-game').addEventListener('click', () => sortCards([...cards].sort(() => Math.random() - 0.5)));
```

> Magic

```js
document.getElementById('Magic-game').addEventListener('click', () => sortCards(cards))
```

### Logic to show/hide cards

```js
document.getElementById('show-game').addEventListener('click', () => (!cardsWrapper.classList.contains('hidden') ? cardsWrapper.classList.add('hidden') : cardsWrapper.classList.remove('hidden')));
```

## Wins and Blockers

### Wins

- Make sure all four suits of cards are rendered on the paged as 'Let's get started' is clicked. There are 13 cards in each suit (♥, ♣, ♦, ♠).
- Add three buttons to the flow that will do 3 actions:
  - **Shuffle:** Randomly shuffles all cards.
  - **Show/Hide:** Hide all the cards by adding a class hidden.
  - **Magic:** Order the cards again by suit.
- Classes for the cards are created automatically: `.hearts-1`, `.hearts-2`, ... , `.spades-13`.
- The value for each card is visible on the initial render. Each card has been moved a bit, so the card is readable.
- Although a hack animation is present.
- Remove all images and have the cards represented with CSS only.
- All tests in the `cypress/integration/magic-trick.js` file passed.

### Blockers

- Create a working transition to create the desirable animation  - I use a hack, setTimeOut as a way around it but cards shuffle or regroup before all cards retract.

## What I have learned (tech & soft skills)

- Importance of stepping back before refactoring
- Exposure to cypress test suit
- Revisit SASS, and it's syntax
- Vanilla ES6 refresher
