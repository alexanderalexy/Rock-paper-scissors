const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const gameIntro = document.getElementById('game-intro');
const gameScreen = document.getElementById('game-screen');
const startButton = document.getElementById('start-button');
const gameButtons = document.querySelectorAll('#rock, #paper, #scissors');

let userChoice;
let result;

// Funktion, um das Spiel zu starten und die Startseite auszublenden
function startGame() {
    gameIntro.style.display = 'none'; // Startseite ausblenden
    gameScreen.style.display = 'block'; // Spielbildschirm anzeigen
}

// Event-Listener für den "Start"-Button hinzufügen
startButton.addEventListener('click', startGame);

gameButtons.forEach(gameButton => {
    gameButton.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    });
});

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * gameButtons.length);

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else if (randomNumber === 2) {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!";
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lose!";
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!";
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!";
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!";
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lose!";
    }

    resultDisplay.innerHTML = result;
};
