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

const iconPaper = '<img class="paperIcon" src="./images/icon-paper.svg">';
const iconScissors = '<img class="scissorsIcon" src="./images/icon-scissors.svg">';
const iconRock = '<img class="rockIcon" src="./images/icon-rock.svg">';


console.log(score)

const gameRunPaper = () => {
    setTimeout(() => {
        //const choices = ['paper', 'scissors', 'rock']
        choiceNr = Math.floor(Math.random() * 3)
        console.log(choiceNr)
        if (choiceNr === 0) {
            housePick.classList.replace('housePick', 'houseShapePaper')
            const houseShapePaper = document.querySelector('.houseShapePaper')
            houseShapePaper.innerHTML = iconPaper
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>DRAW</h1>'
        }
        else if (choiceNr === 1) {
            housePick.classList.replace('housePick', 'houseShapeScissors')
            const houseShapeScissors = document.querySelector('.houseShapeScissors')
            houseShapeScissors.innerHTML = iconScissors
            score = score - 1
            scoreNr.innerHTML = score
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU LOSE</h1>'
        }
        else if (choiceNr === 2) {
            housePick.classList.replace('housePick', 'houseShapeRock')
            const houseShapeRock = document.querySelector('.houseShapeRock')
            houseShapeRock.innerHTML = iconRock
            score = score + 1
            scoreNr.innerHTML = score
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU WIN</h1>'
            clearTimeout()
        }
    }, 2000)

}

const gameRunScissors = () => {
    setTimeout(() => {
        //const choices = ['paper', 'scissors', 'rock']
        let choiceNr = Math.floor(Math.random() * 3)
        console.log(choiceNr)
        if (choiceNr === 0) {
            housePick.classList.replace('housePick', 'houseShapePaper')
            const houseShapePaper = document.querySelector('.houseShapePaper')
            houseShapePaper.innerHTML = iconPaper
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU WIN</h1>'
            score = score + 1
            scoreNr.innerHTML = score
        }
        else if (choiceNr === 1) {
            housePick.classList.replace('housePick', 'houseShapeScissors')
            const houseShapeScissors = document.querySelector('.houseShapeScissors')
            houseShapeScissors.innerHTML = iconScissors
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>DROW</h1>'
        }
        else if (choiceNr === 2) {
            housePick.classList.replace('housePick', 'houseShapeRock')
            const houseShapeRock = document.querySelector('.houseShapeRock')
            houseShapeRock.innerHTML = iconRock
            score = score - 1
            scoreNr.innerHTML = score
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU LOSE</h1>'
            clearTimeout()
        }
    }, 2000)

}

const gameRunRock = () => {
    setTimeout(() => {
        //const choices = ['paper', 'scissors', 'rock']
        let choiceNr = Math.floor(Math.random() * 3)
        console.log(choiceNr)
        if (choiceNr === 0) {
            housePick.classList.replace('housePick', 'houseShapePaper')
            const houseShapePaper = document.querySelector('.houseShapePaper')
            houseShapePaper.innerHTML = iconPaper
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU LOSE</h1>'
            score = score - 1
            scoreNr.innerHTML = score
        }
        else if (choiceNr === 1) {
            housePick.classList.replace('housePick', 'houseShapeScissors')
            const houseShapeScissors = document.querySelector('.houseShapeScissors')
            houseShapeScissors.innerHTML = iconScissors
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU WIN</h1>'
            score = score + 1
            scoreNr.innerHTML = score
        }
        else if (choiceNr === 2) {
            housePick.classList.replace('housePick', 'houseShapeRock')
            const houseShapeRock = document.querySelector('.houseShapeRock')
            houseShapeRock.innerHTML = iconRock
            result.style.opacity = '1'
            resultText.innerHTML = '<h1>YOU DROW</h1>'
            clearTimeout()
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
    shapePaper.innerHTML = iconPaper
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
    shapeScissors.innerHTML = iconScissors
    gameRunScissors()
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
    shapeRock.innerHTML = iconRock
    gameRunRock()
})

resultBtn.addEventListener('click', () => {
    let shapePaper = document.querySelector('.shapePaper')
    const houseShapePaper = document.querySelector('.houseShapePaper')
    //********* Tutaj koniec */
    const shapeScissors = document.querySelector('.shapeScissors')
    const houseShapeScissors = document.querySelector('.houseShapeScissors')

    const shapeRock = document.querySelector('.shapeRock')
    const houseShapeRock = document.querySelector('.houseShapePaper')



    choice.style.display = 'flex'
    rulesButton.style.display = 'flex'
    game.style.display = 'none'
    result.style.display = 'none'
    shapePaper.innerHTML = 't'

    houseShapePaper = 't'

})
