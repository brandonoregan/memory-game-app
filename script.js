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
let animals = ["cat", "monkey", "cat", "penguin", "penguin", "monkey"];
let showingArr = [];

// Function that reveals a picture associated with the card
const revealCard = function (e) {
  const dataValue = e.target.dataset.cards;
  const displayCard = e.target.closest(".card");

  displayCard.innerHTML = `
    <img class="" src="img/${animals[dataValue]}.png" alt="Monkey">
    `;

  displayCard.style.backgroundColor = "#454545";
  showingArr.push(dataValue);
  cardsShowing++;
  console.log(cardsShowing);
  console.log(showingArr);
};

const checkPair = function (e) {
  if (cardsShowing === 2) {
    if (showingArr.includes("1") && showingArr.includes("5")) {
      console.log("winner");
      showingArr = [];
    } else if (showingArr.includes("0") && showingArr.includes("2")) {
      console.log("winner");
      showingArr = [];
    } else if (showingArr.includes("3") && showingArr.includes("4")) {
      console.log("winner");
      showingArr = [];
    } else {
      setTimeout(function () {
        cardsShowing = 0;

        showingArr = [];

        allCards.forEach(function (c) {
          c.innerHTML = "";
          c.style.backgroundColor = "#ff6000";
        });
      }, 1000);
    }
  }

  if (cardsShowing === 6) {
    console.log("Congratulations, you win!");
  }
};

// function that checks what a card is so that the right picture can be diplayed
const checkData = function () {};

//////////Events////////////
cardContainer.addEventListener("click", function (e) {
  revealCard(e);
  checkPair();
  //   if (e.target.dataset.cards === "1") {
  //     const displayCard = e.target.closest(".card");
  //     displayCard.innerHTML = `
  //       <img class="" src="img/monkey.png" alt="Monkey">
  //       `;
  //     displayCard.style.backgroundColor = "#454545";
  //   }

  //   if (e.target.dataset.cards === "5") {
  //     const displayCard = e.target.closest(".card");
  //     displayCard.innerHTML = `
  //         <img class="" src="img/monkey.png" alt="Monkey">
  //         `;
  //     displayCard.style.backgroundColor = "#454545";
  //   }

  //   if (e.target.dataset.cards === "0") {
  //     const displayCard = e.target.closest(".card");
  //     displayCard.innerHTML = `
  //         <img class="" src="img/cat.png" alt="cat">
  //         `;
  //     displayCard.style.backgroundColor = "#454545";
  //   }

  //   if (e.target.dataset.cards === "2") {
  //     const displayCard = e.target.closest(".card");
  //     displayCard.innerHTML = `
  //         <img class="" src="img/cat.png" alt="cat">
  //         `;
  //     displayCard.style.backgroundColor = "#454545";
  //   }

  //   if (e.target.dataset.cards === "3") {
  //     const displayCard = e.target.closest(".card");
  //     displayCard.innerHTML = `
  //         <img class="" src="img/penguin.png" alt="penguin">
  //         `;
  //     displayCard.style.backgroundColor = "#454545";
  //   }

  //   if (e.target.dataset.cards === "4") {
  //     const displayCard = e.target.closest(".card");
  //     displayCard.innerHTML = `
  //         <img class="" src="img/penguin.png" alt="penguin">
  //         `;
  //     displayCard.style.backgroundColor = "#454545";
  //   }
  //   console.log(e.target);
  //   console.log(e.currentTarget);
});

// allCards.forEach((card, i) =>
//   card.addEventListener("click", function (e) {

//     // Img is associated with 2 data values
//   })
// );
