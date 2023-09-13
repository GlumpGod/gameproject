// variables for choices made by computer and player

let computerPlay;
let playerChoice;

// function to get choice and store it

function getCPUChoice() {
    const computerSelection = ["rock" , "paper" , "scissors"];
    const randomCPU = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return randomCPU
};

// function to get player input & const to prompt / store input

function getPlayerChoice() {
    const userInput = prompt('Rock, Paper, or Scissors? ');
};

// function to play a round of rock paper scissors

function playRound() {
    computerPlay = getCPUChoice().toLowerCase();
    playerChoice = getPlayerChoice().toLowerCase();
};

// save for later document.getElementById('results').innerHTML = "The winner is " + playerChoice + computerPlay ;