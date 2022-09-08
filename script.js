const rules = document.querySelector('.rules');
const rulesClose = document.querySelector('.rulesClose')
const rulesButton = document.querySelector('.rulesButton')

const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rock = document.querySelector('.rock')

const choice = document.querySelector('.choice')
const game = document.querySelector('.game')
const result = document.querySelector('.result')

const resultText = document.querySelector('.resultText')
const resultBtn = document.querySelector('.result')
const userPick = document.querySelector('.userPick')

const housePick = document.querySelector('.housePick')
let scoreNr = document.querySelector('.scoreNr')

rulesClose.addEventListener('click', () => {
    rules.style.display = 'none';
})

rulesButton.addEventListener('click', () => {
    rules.style.display = 'flex'
})

let score = 0;
let userChoice = '';

console.log(score)

const gameRunPaper = () => {
    setTimeout(() => {
        //const choices = ['paper', 'scissors', 'rock']
        let choiceNr = Math.floor(Math.random() * 3)
        console.log(choiceNr)
        if (choiceNr === 0) {
            housePick.classList.replace('housePick', 'houseShapePaper')
            const houseShapePaper = document.querySelector('.houseShapePaper')
            houseShapePaper.innerHTML = '<img class="paperIcon" src="./images/icon-paper.svg">'
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>DRAW</h1>'
        }
        else if (choiceNr === 1) {
            housePick.classList.replace('housePick', 'houseShapeScissors')
            const houseShapeScissors = document.querySelector('.houseShapeScissors')
            houseShapeScissors.innerHTML = '<img class="paperIcon" src="./images/icon-scissors.svg">'
            score = score - 1
            scoreNr.innerHTML = score
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU LOSE</h1>'
        }
        else if (choiceNr === 2) {
            housePick.classList.replace('housePick', 'houseShapeRock')
            const houseShapeRock = document.querySelector('.houseShapeRock')
            houseShapeRock.innerHTML = '<img class="paperIcon" src="./images/icon-rock.svg">'
            score = score + 1
            scoreNr.innerHTML = score
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU WIN</h1>'

        }
    }, 2000)

}

//*****************USER CHOICE*********

paper.addEventListener('click', () => {
    userChoice = 'paper'
    console.log(userChoice)
    choice.style.display = 'none'
    rulesButton.style.display = 'none'
    game.style.display = 'flex'
    result.style.display = 'flex'
    userPick.classList.replace('userPick', 'shapePaper')
    const shapePaper = document.querySelector('.shapePaper')
    shapePaper.innerHTML = '<img class="paperIcon" src="./images/icon-paper.svg">'
    gameRunPaper()
})

scissors.addEventListener('click', () => {
    userChoice = 'scissors'
    console.log(userChoice)
    choice.style.display = 'none'
    rulesButton.style.display = 'none'
    game.style.display = 'flex'
    result.style.display = 'flex'
    userPick.classList.replace('userPick', 'shapeScissors')
    const shapeScissors = document.querySelector('.shapeScissors')
    shapeScissors.innerHTML = '<img class="ScissorsIcon" src="./images/icon-scissors.svg">'
})

rock.addEventListener('click', () => {
    userChoice = 'rock'
    console.log(userChoice)
    choice.style.display = 'none'
    rulesButton.style.display = 'none'
    game.style.display = 'flex'
    result.style.display = 'flex'
    userPick.classList.replace('userPick', 'shapeRock')
    const shapeRock = document.querySelector('.shapeRock')
    shapeRock.innerHTML = '<img class="rockIcon" src="./images/icon-rock.svg">'
})


