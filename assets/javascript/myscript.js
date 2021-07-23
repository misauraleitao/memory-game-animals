
    let cardArray = [
        {
            name: 'cat' ,
            img: 'assets/images/cat.jpg'
        },
        {
            name: 'cat' ,
            img: 'assets/images/cat.jpg'
        },
        {
            name: 'dog' ,
            img: 'assets/images/dog.png'
        },
        {
            name: 'dog' ,
            img: 'assets/images/dog.png'
        },
        {
            name: 'elephant' ,
            img: 'assets/images/elephant.jpg'
        },
        {
            name: 'elephant' ,
            img: 'assets/images/elephant.jpg'
        },
        {
            name: 'giraffe' ,
            img: 'assets/images/giraffe.jpg'
        },
        {
            name: 'giraffe' ,
            img: 'assets/images/giraffe.jpg'
        },
        {
            name: 'monkey' ,
            img: 'assets/images/mokey.jpg'
        },
        {
            name: 'monkey' ,
            img: 'assets/images/mokey.jpg'
        },
        {
            name: 'panda' ,
            img: 'assets/images/panda.png'
        },
        {
            name: 'panda' ,
            img: 'assets/images/panda.png'
        }

    ];
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

    document.addEventListener("DOMContentLoaded", function () {
        //define functions 
        
        createBoard(grid, cardArray); 
        arrangeCard();
        playAgain.addEventListener("click", replay); 
        
        //add a click function for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
        });

        //createBoard function

function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "assets/images/blank.jpg");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
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

   