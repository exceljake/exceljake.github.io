// CONST DIVS

const firstDiv = document.querySelector('.first-div');
const secondDiv = document.querySelector('.second-div');
const thirdDiv = document.querySelector('.third-div');
const fourthDiv = document.querySelector('.fourth-div');

//CONST SUBMIT BUTTON

const submitBtn = document.querySelector('.submit-btn')

// CONST LEFT RIGHT BUTTON, CONTAINER

const buttonsContainer = document.querySelector(".buttons-container")
const rightButtonFirst = document.querySelector('.right-button-first');
const leftButtonSecond = document.querySelector('.left-button-second');
const rightButtonSecond = document.querySelector('.right-button-second');
const leftButtonThird = document.querySelector('.left-button-third');
const rightButtonThird = document.querySelector('.right-button-third');
const leftButtonFourth = document.querySelector('.left-button-fourth');

//LET PAGE INDEX

let pageIndex = JSON.parse(localStorage.getItem("pageNumberIndex"));

//RIGHT AND LEFT ONCLICK FUNCTIONS

rightButtonFirst.onclick = () => {
    pageIndex += 1;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    document.location.reload(true);
}

leftButtonSecond.onclick = () => {
    pageIndex -= 1;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    document.location.reload(true);
}

rightButtonSecond.onclick = () => {
    pageIndex += 1;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    document.location.reload(true);
}

leftButtonThird.onclick = () => {
    pageIndex -= 1;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    document.location.reload(true);
}

rightButtonThird.onclick = () => {
    pageIndex += 1;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    document.location.reload(true);
}

leftButtonFourth.onclick = () => {
    pageIndex -= 1;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    document.location.reload(true);
}

// FUNCTION SHOWPAGE

function showPage() {
    if (pageIndex === 1) {
        firstDiv.classList.add("hide");
        secondDiv.classList.remove("hide");
    }
    if (pageIndex === 2) {
        firstDiv.classList.add("hide");
        thirdDiv.classList.remove("hide");
    }
    if (pageIndex === 3) {
        firstDiv.classList.add("hide");
        fourthDiv.classList.remove("hide");
    }
}

//SUBMIT BUTTON ONCLICK FUNCTION

// const fullName = document.querySelector('.input-name');

// submitBtn.onclick = () => {
//     alert(fullName.value);
//     // window.location = "/submit.html";
// }


//INITIALIZATION

showPage();

//Next to do
// design of all divs
// design of buttons

//PROBLEMS
// need to put JS to alert if it input doesnt have input

// to refactor
// 1. JS code in the buttons should be shorten
// too long because left and right button does not function throughout 
// all divs


//FINAL PLAN

//remove the divs
// remove the JS
// just plain short survey form

//update on final plan
// input type ="submit" value="submit"
// worked even if there is divs
// later afternoon, put again the divs and the local storage