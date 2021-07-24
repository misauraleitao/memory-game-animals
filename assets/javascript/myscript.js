// array for  all cards, images used

let cardArray = [{
    name: 'cat',
    img: 'assets/images/cat.jpg'
},
{
    name: 'cat',
    img: 'assets/images/cat.jpg'
},
{
    name: 'dog',
    img: 'assets/images/dog.png'
},
{
    name: 'dog',
    img: 'assets/images/dog.png'
},
{
    name: 'elephant',
    img: 'assets/images/elephant.jpg'
},
{
    name: 'elephant',
    img: 'assets/images/elephant.jpg'
},
{
    name: 'giraffe',
    img: 'assets/images/giraffe.jpg'
},
{
    name: 'giraffe',
    img: 'assets/images/giraffe.jpg'
},
{
    name: 'monkey',
    img: 'assets/images/mokey.jpg'
},
{
    name: 'monkey',
    img: 'assets/images/mokey.jpg'
},
{
    name: 'panda',
    img: 'assets/images/panda.png'
},
{
    name: 'panda',
    img: 'assets/images/panda.png'
}

];

// variables

let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;

document.addEventListener("DOMContentLoaded", function() {
//to define the functions 

createBoard(grid, cardArray);
arrangeCard();
playAgain.addEventListener("click", replay);

//add a click function for images so the user can click on them

imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img =>
    img.addEventListener("click", flipCard)
)
});

//create the coard grid function

function createBoard(grid, array) {
popup.style.display = "none";
array.forEach((arr, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", "assets/images/blank.jpg");
    img.setAttribute("data-id", index);
    grid.appendChild(img);
})
}
// Arrange the cards function

function arrangeCard() {
cardArray.sort(() => 0.5 - Math.random())
}

// flip the Card function

function flipCard() {
let selected = this.dataset.id;
cardsSelected.push(cardArray[selected].name);
cardsId.push(selected);
this.classList.add("flip");
this.setAttribute("src", cardArray[selected].img);
if (cardsId.length === 2) {
    setTimeout(checkForMatch, 500);
}
}

// checkForMatch function

function checkForMatch() {
let imgs = document.querySelectorAll("img");
let firstCard = cardsId[0];
let secondCard = cardsId[1];
if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
    cardsWon += 1;
    scoreBoard.innerHTML = cardsWon;
    setTimeout(checkWon, 500)
} else {
    imgs[firstCard].setAttribute("src", "assets/images/blank.jpg");
    imgs[secondCard].setAttribute("src", "assets/images/blank.jpg");
    imgs[firstCard].classList.remove("flip");
    imgs[secondCard].classList.remove("flip");
}
cardsSelected = [];
cardsId = [];
clicks += 1;
clickBoard.innerHTML = clicks;
}

//To check if player won function.

function checkWon() {
if (cardsWon == cardArray.length / 2) {
    alert("Well Done you matched them all, refresh the page to restart the game") //alert to notify the user they won
    setTimeout(() => popup.style.display = "flex", 300);
}
}

// The replay function it will reshuffle cards

function replay() {
arrangeCard();
grid.innerHTML = "";
createBoard(grid, cardArray);
cardsWon = 0;
clicks = 0;
clickBoard.innerHTML = 0;
scoreBoard.innerHTML = 0;
popup.style.display = "none";
}