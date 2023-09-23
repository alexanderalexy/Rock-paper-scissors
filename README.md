# Rock-Paper-Siccors

[Click here to see deployed game](https://alexanderalexy.github.io/Rock-paper-scissors/)

## Description

This is a simple Rock-Paper-Scissors game, with the MVP based on HTML and JavaScript. 
The first iteration for the MVP was done in about an hour.

Styling with CSS and possibly sound effects will be added in further iterations. 

Control is done by clicking on the selection buttons for Rock, Paper, or Scissors. 

Enjoy playing!


## MVP

Fully functional game including complete game logic and display in the browser.


## Backlog

1. Responsive styling
2. Adding a splash screen
3. Sound effects


## Data structure

1. `computerChoiceDisplay`, `userChoiceDisplay`, and `resultDisplay`: These are variables that store references to HTML elements with specific IDs. They are used to display the computer's choice, the user's choice, and the game result on the webpage.

2. `possibleChoices`: This variable is assigned the result of `document.querySelectorAll('button')`, which selects all HTML button elements on the webpage. It is essentially an array-like collection of buttons that represent the choices the user can make.

3. `userChoice` and `result`: These are variables to store the user's choice (rock, paper, or scissors) and the result of the game (win, lose, or draw), respectively.

4. `generateComputerChoice` function: This function generates a random computer choice (rock, paper, or scissors) and updates the `computerChoiceDisplay` with the chosen value.

5. `getResult` function: This function compares the user's choice and the computer's choice to determine the result of the game (win, lose, or draw) and updates the `resultDisplay` with the result message.


## States y States Transitions
_List of states (views) of your game_


## Task

1. Styling and Responsiveness
2. Adding a splash screen
3. Adding sound effects


## Links

- [Github repository Link](https://github.com/alexanderalexy/Rock-paper-scissors)
- [Deployment Link](https://alexanderalexy.github.io/Rock-paper-scissors/)
