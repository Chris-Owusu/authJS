console.log('Welcome to rock paper scissors🫡🫡🫡');

// Check if input is either rock, paper or scissor
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()

  if (userInput === 'rock' || 'paper' || 'scissors') {
    return userInput
  }else {
    console.log('input must be either rock, paper, or scissors')
  }
}

// console.log(getUserChoice('rock'))

// Get random num between 0 and 2 fro each input
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      return 'rock'
      break
    case 1:
      return 'paper'
      break
    case 2:
      return 'scissors'
      break
    default:
      console.log('Mistake')
  }
}

// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'game was a tie.'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won🎉🎉'
    }else if (computerChoice === 'scissors') {
      return 'Human won🎉🎉'
    }
  }else if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Computer won🎉🎉'
    }else if (computerChoice === 'rock'){
      return 'Human won🎉🎉'
      }
  }else if (userChoice === 'scissors') {
    if (computerChoice === 'paper'){
      return 'Human won🎉🎉'
      }else if (computerChoice === 'rock'){
      return 'Computer won🎉🎉'
      }
    }
}

// console.log(determineWinner('paper', 'rock'))

function playGame() {
  let userChoice = getUserChoice('rock')
  console.log(`The users choice is ${userChoice}`)
  let computerChoice = getComputerChoice()
  console.log(`The users choice is ${computerChoice}`)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
