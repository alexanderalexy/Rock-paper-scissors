const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDispaly = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;
    })
);