document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'cat' ,
            img: 'assets/images/cat.jpg'
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
            name: 'giraffe' ,
            img: 'assets/images/giraffe.jpg'
        },
        {
            name: 'monkey' ,
            img: 'assets/images/mokey.jpg'
        },
        {
            name: 'panda' ,
            img: 'assets/images/panda.png'
        },
    ]
})

const grid = document.querySelectorapply('.grid')

//create board
function createBoard() {
   for (let i = 0; i< cardArray.length; i++) {
let card = document.createElement('img')
card.setAttribute('src', 'assets/images/blank.jpg')
card.setAttribute('data-id', i)
// card.addEventListener('click', flipcard)
grid.appendChild(card)
   }
}
createBoard()