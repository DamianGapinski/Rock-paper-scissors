const rules = document.querySelector('.rules');
const rulesClose = document.querySelector('.rulesClose')
const rulesButton = document.querySelector('.rulesButton')

const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rock = document.querySelector('.rock')

const choice = document.querySelector('.choice')
const game = document.querySelector('.game')

let userChoice = '';

paper.addEventListener('click', () => {
    userChoice = 'paper'
    console.log(userChoice)
    choice.style.display = 'none'
    game.style.display = 'flex'

})

scissors.addEventListener('click', () => {
    userChoice = 'scissors'
    console.log(userChoice)
    choice.style.display = 'none'
    game.style.display = 'flex'
})

rock.addEventListener('click', () => {
    userChoice = 'rock'
    console.log(userChoice)
    choice.style.display = 'none'
    game.style.display = 'flex'
})


rulesClose.addEventListener('click', () => {
    rules.style.display = 'none';
})

rulesButton.addEventListener('click', () => {
    rules.style.display = 'flex'
})