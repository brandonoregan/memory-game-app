"use strict";
// Game components
/* 
1. When a card is clicked it reveals a picture
2. When 2 cards have been chosen they are compared and if they match then they are removed and the user recieve a point.
3. If the cards do not match the cards flip back over.
4.The slider button goes left and right and changes the colour sceam of the baord but not the buttons atm 
5.

*/

//////////DOM Access/////////////
const allCards = document.querySelectorAll(".card");
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");

//////////Functions/////////////
let cardsShowing = 0;

// Function that reveals a picture associated with the card
const revealCard = function () {
  // For card clicked display the picture associated.
  // If clicked reveal img
};

const checkPair = function () {
  // If two cards are displayed check if the cards match
};

// function that checks what a card is so that the right picture can be diplayed
const checkData = function () {};

//////////Events////////////
cardContainer.addEventListener("click", function (e) {
  if (e.target.dataset.cards === "1") {
    const displayCard = e.target.closest(".card");
    displayCard.innerHTML = `
      <img class="" src="img/monkey.png" alt="Monkey">
      `;
    displayCard.style.backgroundColor = "#454545";
  }

  if (e.target.dataset.cards === "5") {
    const displayCard = e.target.closest(".card");
    displayCard.innerHTML = `
        <img class="" src="img/monkey.png" alt="Monkey">
        `;
    displayCard.style.backgroundColor = "#454545";
  }

  if (e.target.dataset.cards === "0") {
    const displayCard = e.target.closest(".card");
    displayCard.innerHTML = `
        <img class="" src="img/cat.png" alt="cat">
        `;
    displayCard.style.backgroundColor = "#454545";
  }

  if (e.target.dataset.cards === "2") {
    const displayCard = e.target.closest(".card");
    displayCard.innerHTML = `
        <img class="" src="img/cat.png" alt="cat">
        `;
    displayCard.style.backgroundColor = "#454545";
  }

  if (e.target.dataset.cards === "3") {
    const displayCard = e.target.closest(".card");
    displayCard.innerHTML = `
        <img class="" src="img/penguin.png" alt="penguin">
        `;
    displayCard.style.backgroundColor = "#454545";
  }

  if (e.target.dataset.cards === "4") {
    const displayCard = e.target.closest(".card");
    displayCard.innerHTML = `
        <img class="" src="img/penguin.png" alt="penguin">
        `;
    displayCard.style.backgroundColor = "#454545";
  }
  console.log(e.target);
  console.log(e.currentTarget);
});

// allCards.forEach((card, i) =>
//   card.addEventListener("click", function (e) {

//     // Img is associated with 2 data values
//   })
// );
