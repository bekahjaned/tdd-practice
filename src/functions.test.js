const dealCards = require("./functions");
const firstDeal = require("./functions");
const goFish = require("./functions");
const checkMatch = require("./functions");
const askForCard = require("./functions");

test("players hand gets 7 cards after dealing", () => {
  // given
  const playerHand = 0;

  // when
  const dealtCards = 7;

  // then
  expect(dealCards(playerHand)).toStrictEqual(dealtCards);
});

// ----------------------------------------------------------

test("deck has 7 less cards after dealing", () => {
  // given
  const deck = 52;

  // when
  const dealtCards = 45;

  // then
  expect(firstDeal(deck)).toStrictEqual(dealtCards);
});

// ----------------------------------------------------------

test("player gets 1 more card when picking up from deck", () => {
  // given
  const playerHand = 7;

  // when
  const newPlayerHand = 8;

  // then
  expect(goFish(playerHand)).toStrictEqual(newPlayerHand);
});

// ----------------------------------------------------------

test("check player's hand for matching cards", () => {
  // given
  const playerHand1 = [2, 3, 3, 4, 5];
  const playerHand2 = [2, 3, 4, 5, 6];

  // then
  expect(checkMatch(playerHand1)).toStrictEqual(true);
  expect(checkMatch(playerHand2)).toStrictEqual(false);
});

// ----------------------------------------------------------

test("check second player's hand for specific card and they have it", () => {
  // given
  const player2Hand = [2, 5, 8, 3, 4];
  const askedCard = 5;

  // when
  const hasCard = true;

  // then
  expect(askForCard(askedCard, player2Hand)).toStrictEqual(hasCard);
});

test("check second player's hand for a specific card and they don't have it", () => {
  // given
  const player2Hand = [2, 5, 8, 3, 4];
  const askedCard = 9;

  // when
  const hasCard = false;

  // then
  expect(askForCard(askedCard, player2Hand)).toStrictEqual(hasCard);
});

// ----------------------------------------------------------

// function pickACard(playerHand, deck) {
// need to get a random number
// assign random number to index of deck
// add new card to playerHand
// remove card from deck
// return new lengths of playerHand and deck
// }

// test("adds a random card to player's hand and removes it from deck", () => {
//   // given
//   const playerHand = ["A", 2, 3];
//   const deck = [
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     "J",
//     "Q",
//     "K",
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     "J",
//     "Q",
//     "K",
//     "A",
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     "J",
//     "Q",
//     "K",
//     "A",
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];

// when
//   const count = [{ handCount: 4 }, { deckCount: 49 }];

// then
//   expect(pickACard(playerHand, deck)).toStrictEqual(count);
// });

// How do you test for a random number?
