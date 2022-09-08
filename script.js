const rules = document.querySelector('.rules');
const rulesClose = document.querySelector('.rulesClose')
const rulesButton = document.querySelector('.rulesButton')

const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rock = document.querySelector('.rock')

const choice = document.querySelector('.choice')
const game = document.querySelector('.game')
const userPick = document.querySelector('.userPick')

rulesClose.addEventListener('click', () => {
    rules.style.display = 'none';
})

rulesButton.addEventListener('click', () => {
    rules.style.display = 'flex'
})

let userChoice = '';



paper.addEventListener('click', () => {
    userChoice = 'paper'
    console.log(userChoice)
    choice.style.display = 'none'
    game.style.display = 'flex'
    userPick.classList.replace('userPick', 'userShapePaper')
    const userShapePaper = document.querySelector('.userShapePaper')
    userShapePaper.innerHTML = '<img class="paperIcon" src="./images/icon-paper.svg">'
})

scissors.addEventListener('click', () => {
    userChoice = 'scissors'
    console.log(userChoice)
    choice.style.display = 'none'
    game.style.display = 'flex'
    userPick.classList.replace('userPick', 'userShapeScissors')
    const userShapeScissors = document.querySelector('.userShapeScissors')
    userShapeScissors.innerHTML = '<img class="ScissorsIcon" src="./images/icon-scissors.svg">'
})

rock.addEventListener('click', () => {
    userChoice = 'rock'
    console.log(userChoice)
    choice.style.display = 'none'
    game.style.display = 'flex'
    userPick.classList.replace('userPick', 'userShapeRock')
    const userShapeRock = document.querySelector('.userShapeRock')
    userShapeRock.innerHTML = '<img class="rockIcon" src="./images/icon-rock.svg">'
})


