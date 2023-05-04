"use strict";
// Game components
/* 
TODO
- Make sure each card can only be clicked once
- Create slider function


*/

//////////DOM Access/////////////
const allCards = document.querySelectorAll(".card");
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");

//////////Functions/////////////
let cardsShowing = 0;
let correctPairs = 0;
let animals = ["cat", "monkey", "cat", "penguin", "penguin", "monkey"];
let showingArr = [];

// Function that reveals a picture associated with the card
const revealCard = function (e) {
  const dataValue = e.target.dataset.cards;
  const displayCard = e.target.closest(".card");

  if (!displayCard.classList.contains("showing")) {
    displayCard.classList.add("showing");

    displayCard.innerHTML = `
    <img class="" src="img/${animals[dataValue]}.png" alt="Monkey">
    `;

    displayCard.style.backgroundColor = "#454545";
    showingArr.push(dataValue);
    cardsShowing++;
  }
};

const setCorrect = function (selectionOne, selectionTwo) {
  showingArr = [];
  correctPairs++;
  cardsShowing = 0;
  document.querySelector(
    `[data-cards='${selectionOne}']`
  ).style.backgroundColor = "limegreen";
  document.querySelector(
    `[data-cards='${selectionTwo}']`
  ).style.backgroundColor = "limegreen";
};

const checkPair = function () {
  if (cardsShowing === 2) {
    if (showingArr.includes("1") && showingArr.includes("5")) {
      setCorrect(1, 5);
    } else if (showingArr.includes("0") && showingArr.includes("2")) {
      setCorrect(0, 2);
    } else if (showingArr.includes("3") && showingArr.includes("4")) {
      setCorrect(3, 4);
    } else {
      setTimeout(function () {
        cardsShowing = 0;
        const wrongCardZero = document.querySelector(
          `[data-cards='${showingArr[0]}']`
        );
        const wrongCardOne = document.querySelector(
          `[data-cards='${showingArr[1]}']`
        );

        wrongCardZero.innerHTML = "";

        wrongCardZero.style.backgroundColor = "#ff6000";

        wrongCardZero.classList.remove("showing");

        wrongCardOne.innerHTML = "";

        wrongCardOne.style.backgroundColor = "#ff6000";

        wrongCardOne.classList.remove("showing");

        showingArr = [];
        // For each card that data number does not equal any of the numbers in correctArr reset to default orange
      }, 1000);
    }
  }

  if (cardsShowing === 6) {
    console.log("Congratulations, you win!");
  }
};

//////////Events////////////
cardContainer.addEventListener("click", function (e) {
  revealCard(e);
  checkPair(e);
});
