const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDispaly = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let result;

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;
      generateComputerChoice();
      getResult();
    }));

    generateComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

        if(randomNumber === 1) {
            computerChoice = "rock";
        } else if (randomNumber === 2) {
            computerChoice = "paper";
        } else if (randomNumber === 3) {
            computerChoice = "scissors";
        }

        computerChoiceDisplay.innerHTML = computerChoice;
        
    }

    getResult = () => {
        if (computerChoice === userChoice) {
            result = "It's a draw !"
        } else if (computerChoice === "rock" && userChoice === "paper") {
            result = "you win !"
        } else if (computerChoice === "rock" && userChoice === "scissors") {
            result = "you lose !"
        } else if (computerChoice === "paper" && userChoice === "scissors") {
            result = "you win !"
        } else if (computerChoice === "paper" && userChoice === "rock") {
            result = "you lose !"
        } else if (computerChoice === "scissors" && userChoice === "rock") {
            result = "you win !"
        } else if (computerChoice === "scissors" && userChoice === "paper") {
            result = "you lose !"
        }

        resultDispaly.innerHTML = result;
    };