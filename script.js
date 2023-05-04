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
const gridContainerOne = document.querySelector(".grid-container--1");
const gridContainerTwo = document.querySelector(".grid-container--2");
const gridContainerThree = document.querySelector(".grid-container--3");

//////////Functions/////////////
let cardsShowing = 0;
let correctPairs = 0;
let animals = ["cat", "monkey", "cat", "penguin", "penguin", "monkey"];
let animalsTwo = ["cat", "monkey", "cat", "penguin", "penguin", "monkey"];
let showingArr = [];

// Function that reveals a picture associated with the card
const revealCard = function (e) {
  const dataValue = e.target.dataset.cards;
  const displayCard = e.target.closest(".card");

  if (!displayCard.classList.contains("showing")) {
    displayCard.classList.add("showing");

    displayCard.innerHTML = `
    <img class="" src="img/${animals[dataValue]}.png" alt="${animals[dataValue]}}">
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

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlide = slides.length;

// Just used for implementing slider
// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4)";
// slider.style.transform = "visible";

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${200 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  }
  currentSlide--;
  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", previousSlide);
