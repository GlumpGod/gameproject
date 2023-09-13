// variables for choices made by computer and player

let computerPlay;
let playerChoice;

// constant for 3 choices used in computer function

const computerSelection = ["rock" , "paper" , "scissors"];

// function used for computer to choose between 3 choices "rock paper scissors"

function getComputerChoice() {
    return computerSelection [ Math.random() * computerSelection.length ] 
};

// function to get player choice

function getPlayerChoice(){
    console.prompt('Rock Paper or Scissors?')
}

// function to play a round of rock paper scissors

function playRound(playerChoice , computerSelection) {
    computerPlay = computerSelection().toLowerCase();
}

console.log()