"use strict";
// Game components
/* 
TODO
- Create slider function


*/

//////////DOM Access/////////////
const allCards = document.querySelectorAll(".card");
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const gridContainerOne = document.querySelector(".grid-container--0");
const gridContainerTwo = document.querySelector(".grid-container--1");
const gridContainerThree = document.querySelector(".grid-container--2");

//////////Functions/////////////
let cardsShowing = 0;
let correctPairs = 0;
let animals0 = ["cat", "monkey", "cat", "penguin", "penguin", "monkey"];
let animals1 = ["monkey", "cat", "penguin", "cat", "monkey", "penguin"];
let animals2 = ["cat", "monkey", "cat", "penguin", "penguin", "monkey"];
let showingArr = [];

// Function that reveals a picture associated with the card
const revealCard = function (e) {
  const dataValue = e.target.dataset.cards;
  const displayCard = e.target.closest(".card");

  if (!displayCard.classList.contains("showing") && currentSlide === 0) {
    let animals = animals0;
    // let animals = `animals${currentSlide}`;
    displayCard.classList.add("showing");

    displayCard.innerHTML = `
    <img class="" src="img/${animals[dataValue]}.png" alt="${animals[dataValue]}}">
    `;

    displayCard.style.backgroundColor = "#454545";
    showingArr.push(dataValue);
    cardsShowing++;
  }
  if (!displayCard.classList.contains("showing") && currentSlide === 1) {
    let animals = animals1;
    // let animals = `animals${currentSlide}`;
    displayCard.classList.add("showing");

    displayCard.innerHTML = `
    <img class="" src="img/${animals[dataValue]}.png" alt="${animals[dataValue]}}">
    `;

    displayCard.style.backgroundColor = "#454545";
    showingArr.push(dataValue);
    cardsShowing++;
  }
  if (!displayCard.classList.contains("showing") && currentSlide === 2) {
    let animals = animals2;
    // let animals = `animals${currentSlide}`;
    displayCard.classList.add("showing");

    displayCard.innerHTML = `
    <img class="" src="img/${animals[dataValue]}.png" alt="${animals[dataValue]}}">
    `;

    displayCard.style.backgroundColor = "#454545";
    showingArr.push(dataValue);
    cardsShowing++;
  }
};

const setCorrect = function () {
  correctPairs++;
  cardsShowing = 0;
  allCards.forEach((card) => {
    if (card.classList.contains("showing")) {
      card.style.backgroundColor = "limegreen";
      card.classList.add("correct");
    }
  });
  showingArr = [];
};

const wrongPair = function () {
  setTimeout(function () {
    allCards.forEach((card) => {
      if (
        card.classList.contains("showing") &&
        !card.classList.contains("correct")
      ) {
        card.innerHTML = "";
        card.style.backgroundColor = "#ff6000";
        card.classList.remove("showing");
      }
    });
    cardsShowing = 0;
    showingArr = [];
  }, 1000);
};

const gridCheckOne = function () {
  if (showingArr.includes("1") && showingArr.includes("5")) {
    setCorrect();
  } else if (showingArr.includes("0") && showingArr.includes("2")) {
    setCorrect();
  } else if (showingArr.includes("3") && showingArr.includes("4")) {
    setCorrect();
  } else {
    wrongPair();
  }
};
const gridCheckTwo = function () {
  if (showingArr.includes("0") && showingArr.includes("4")) {
    setCorrect();
  } else if (showingArr.includes("1") && showingArr.includes("3")) {
    setCorrect();
  } else if (showingArr.includes("2") && showingArr.includes("5")) {
    setCorrect();
  } else {
    wrongPair();
  }
};
const gridCheckThree = function () {
  if (showingArr.includes("1") && showingArr.includes("5")) {
    setCorrect();
  } else if (showingArr.includes("0") && showingArr.includes("2")) {
    setCorrect();
  } else if (showingArr.includes("3") && showingArr.includes("4")) {
    setCorrect();
  } else {
    wrongPair();
  }
};

const checkPair = function () {
  if (cardsShowing === 2) {
    if (currentSlide === 0) {
      gridCheckOne();
    } else if (currentSlide === 1) {
      gridCheckTwo();
      console.log("checking 1");
    } else if (currentSlide === 2) {
      gridCheckThree();
      console.log("checking 2");
    }
  }
};

const clearBoard = function () {
  cardsShowing = 0;
  showingArr = [];
  correctPairs = 0;
  allCards.forEach((card) => {
    card.innerHTML = "";
    card.style.backgroundColor = "#ff6000";
    card.classList.remove("showing");
  });
};
//////////Events////////////
cardContainer.addEventListener("click", function (e) {
  revealCard(e);
  checkPair(e);
});

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlide = slides.length;

// Just used for implementing slider
// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4)";
// slider.style.transform = "visible";

// Function that goes through each instance of node slide and assign it an x positioning.
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${200 * (i - slide)}%)`)
  );
};

// Initially go to slide zero when the page loads
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  clearBoard();
  goToSlide(currentSlide);
  console.log(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  }
  currentSlide--;
  clearBoard();
  goToSlide(currentSlide);
  console.log(currentSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", previousSlide);
