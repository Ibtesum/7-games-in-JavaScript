const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let result 
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1) //
    // console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    // console.log(computerChoice)

}

function getResult(){
    if(computerChoice === userChoice){
        result = "Its a draw"
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "You win!"
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "Computer wins!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "Computer wins!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "You win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "You win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "Computer wins!"
    }
    resultDisplay.innerHTML = result
}
