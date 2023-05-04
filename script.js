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
      correctPairs++;
      cardsShowing = 0;
      document.querySelector("[data-cards='1']").style.backgroundColor =
        "limegreen";
      document.querySelector("[data-cards='5']").style.backgroundColor =
        "limegreen";
    } else if (showingArr.includes("0") && showingArr.includes("2")) {
      console.log("winner");
      showingArr = [];
      correctPairs++;
      cardsShowing = 0;
      document.querySelector("[data-cards='0']").style.backgroundColor =
        "limegreen";
      document.querySelector("[data-cards='2']").style.backgroundColor =
        "limegreen";
    } else if (showingArr.includes("3") && showingArr.includes("4")) {
      console.log("winner");
      showingArr = [];
      correctPairs++;
      cardsShowing = 0;
      document.querySelector("[data-cards='3']").style.backgroundColor =
        "limegreen";
      document.querySelector("[data-cards='4']").style.backgroundColor =
        "limegreen";
    } else {
      setTimeout(function () {
        cardsShowing = 0;

        document.querySelector(`[data-cards='${showingArr[0]}']`).innerHTML =
          "";

        document.querySelector(
          `[data-cards='${showingArr[0]}']`
        ).style.backgroundColor = "#ff6000";

        document.querySelector(`[data-cards='${showingArr[1]}']`).innerHTML =
          "";

        document.querySelector(
          `[data-cards='${showingArr[1]}']`
        ).style.backgroundColor = "#ff6000";

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
