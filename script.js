const rules = document.querySelector('.rules');
const rulesClose = document.querySelector('.rulesClose')
const rulesButton = document.querySelector('.rulesButton')

const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rock = document.querySelector('.rock')

const paperIcon = document.querySelector('.paperIcon')
const scissorsIcon = document.querySelector('.scissorsIcon')
const rockIcon = document.querySelector('.rockIcon')

const choice = document.querySelector('.choice')
const game = document.querySelector('.game')
const result = document.querySelector('.result')

let resultText = document.querySelector('.resultText')
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

let SCORE = 0;
let shapeStyle = '';
const royalblueBorder = 'border: 20px solid royalblue;'
const redBorder = 'border: 20px solid red;'
const yellowBorder = 'border: 20px solid yellow;'

rock.addEventListener('click', () => {
  result.style.display = 'flex'
  game.style.display = 'flex'
  choice.style.display = 'none'
  userChoice = 'rock'
  shapeStyle = redBorder
  selectshape(userChoice, shapeStyle)
})

paper.addEventListener('click', () => {
  result.style.display = 'flex'
  game.style.display = 'flex'
  choice.style.display = 'none'
  userChoice = 'paper'
  shapeStyle = royalblueBorder
  selectshape(userChoice, shapeStyle)
})

scissors.addEventListener('click', () => {
  result.style.display = 'flex'
  game.style.display = 'flex'
  choice.style.display = 'none'
  userChoice = 'scissors'
  shapeStyle = yellowBorder
  selectshape(userChoice, shapeStyle)

})

const selectshape = (userChoice, shapeStyle) => {
  userPick.innerHTML = `<img class="${userChoice}Icon" src="./images/icon-${userChoice}.svg">`
  userPick.style = shapeStyle;


  setTimeout(() => {
    housePick.style.backgroundColor = 'var(--light-color)'
    aiPick(userChoice)
  }, 1000)

}

const aiPick = (userChoice) => {

  const possibilities = ['paper', 'scissors', 'rock']
  let aiNr = Math.floor(Math.random() * 3)
  housePick.innerHTML = `<img class="${possibilities[aiNr]}Icon" src="./images/icon-${possibilities[aiNr]}.svg">`

  if (aiNr == 0) {
    housePick.style.border = '20px solid royalblue'
  }
  else if (aiNr == 1) {
    housePick.style.border = '20px solid yellow'
  }
  else {
    housePick.style.border = '20px solid red'
  }
  gameResult(userChoice, aiNr)
}

const gameResult = (userChoice, aiNr) => {
  result.style.opacity = '1'

  if (userChoice == 'paper' && aiNr == 0) {
    resultText.innerHTML = '<h1>DROW</h1>'


  }
  else if (userChoice == 'paper' && aiNr == 1) {
    resultText.innerHTML = '<h1>YOU LOSE</h1>'
    score = score - 1;
  }
  else if (userChoice == 'paper' && aiNr == 2) {
    resultText.innerHTML = '<h1>YOU WIN</h1>'
    score = score + 1;
  }
  else if (userChoice == 'scissors' && aiNr == 0) {
    resultText.innerHTML = '<h1>YOU WIN</h1>'
    score = score + 1;
  }
  else if (userChoice == 'scissors' && aiNr == 1) {
    resultText.innerHTML = '<h1>DROW</h1>'
  }
  else if (userChoice == 'scissors' && aiNr == 2) {
    resultText.innerHTML = '<h1>YOU LOSE</h1>'
    score = score - 1;
  }
  else if (userChoice == 'rock' && aiNr == 0) {
    resultText.innerHTML = '<h1>YOU LOSE</h1>'
    score = score - 1;
  }
  else if (userChoice == 'rock' && aiNr == 1) {
    resultText.innerHTML = '<h1>YOU WIN</h1>'
    score = score + 1;
  }
  else if (userChoice == 'rock' && aiNr == 2) {
    resultText.innerHTML = '<h1>DROW</h1>'
  }
  scoreNr.innerHTML = score
}


resultBtn.addEventListener('click', () => {
  result.style.opacity = '0'
  result.style.display = 'none'
  game.style.display = 'none'
  choice.style.display = 'flex'
  rulesButton.style.display = 'flex'
  housePick.style.border = '15px solid transparent'
  housePick.style.backgroundColor = 'transparent'
  housePick.innerHTML = ''
  userChoice = ''
  aiNr = ''
  resultText.innerHTML = ''
})







