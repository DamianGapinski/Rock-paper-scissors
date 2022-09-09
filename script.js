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
let choiceNr = null;

const iconPaper = '<img class="paperIcon" src="./images/icon-paper.svg">'
const iconScissors = '<img class="scissorsIcon" src="./images/icon-scissors.svg">'
const iconRock = '<img class="rockIcon" src="./images/icon-rock.svg">'

const possibilities = [
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
    {
        name: "rock",
        beats: "scissors",
    },
]

const shapes = ['rock', 'scissors', 'paper']



const showGamePanel = () => {
    choice.style.display = 'none'
    rulesButton.style.display = 'none'
    game.style.display = 'flex'
    result.style.display = 'flex'
    result.style.opacity = '1'

}

rock.addEventListener('click', () => {

    showGamePanel();
    userPick.classList.replace('userPick', 'shapeRock')
    const shapeRock = document.querySelector('.shapeRock')
    shapeRock.innerHTML = iconRock
    let nr = Math.floor(Math.random() * possibilities.length)
    console.log(nr)
    if (nr === 0) {
        housePick.classList.replace('housePick', 'houseShapeRock')
        const houseShapeRock = document.querySelector('.houseShapeRock')
        houseShapeRock.innerHTML = iconRock
        showGamePanel()
        resultText.innerHTML = '<h1>ROW</h1>'
    }
    else if (nr === 1) {
        housePick.classList.replace('housePick', 'houseShapeScissors')
        const houseShapeScissors = document.querySelector('.houseShapeScissors')
        houseShapeScissors.innerHTML = iconScissors
        showGamePanel()
        resultText.innerHTML = '<h1>YOU WIN</h1>'
        scoreNr.innerHTML = score + 1
    }
    else {
        housePick.classList.replace('housePick', 'houseShapePaper')
        const houseShapePaper = document.querySelector('.houseShapePaper')
        houseShapePaper.innerHTML = iconPaper
        showGamePanel()
        resultText.innerHTML = '<h1>YOU LOSE</h1>'
        scoreNr.innerHTML = score - 1
    }

})

paper.addEventListener('click', () => {

    showGamePanel();
    userPick.classList.replace('userPick', 'shapePaper')
    const shapePaper = document.querySelector('.shapePaper')
    shapePaper.innerHTML = iconPaper
    let nr = Math.floor(Math.random() * possibilities.length)
    console.log(nr)
    if (nr === 0) {
        housePick.classList.replace('housePick', 'houseShapeRock')
        const houseShapeRock = document.querySelector('.houseShapeRock')
        houseShapeRock.innerHTML = iconRock
        showGamePanel()
        resultText.innerHTML = '<h1>WIN</h1>'
        scoreNr.innerHTML = score + 1
    }
    else if (nr === 1) {
        housePick.classList.replace('housePick', 'houseShapeScissors')
        const houseShapeScissors = document.querySelector('.houseShapeScissors')
        houseShapeScissors.innerHTML = iconScissors
        showGamePanel()
        resultText.innerHTML = '<h1>YOU LOSE</h1>'
        scoreNr.innerHTML = score - 1
    }
    else {
        housePick.classList.replace('housePick', 'houseShapePaper')
        const houseShapePaper = document.querySelector('.houseShapePaper')
        houseShapePaper.innerHTML = iconPaper
        showGamePanel()
        resultText.innerHTML = '<h1>DROW</h1>'

    }

})
