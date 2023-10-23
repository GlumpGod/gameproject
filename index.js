// variables

let computerPlay;
let playerChoice;
let result;
const answer = document.getElementById('inputText');
const submit = document.getElementById('inputBtn');
const output = document.getElementById('output');

// function to get choice and store it

function getCPUChoice() {
    const computerSelection = ["rock" , "paper" , "scissors"];
    const randomCPU = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return randomCPU.toLowerCase()
};

// function for win condition

function results() {
    
    if (playerChoice === 'rock' && computerPlay === 'scissors' || playerChoice === 'scissors' && computerPlay === 'paper' || playerChoice === 'paper' && computerPlay === 'rock') 
            result = 'you win'
        
            else if (playerChoice === 'scissors' && computerPlay === 'rock' || playerChoice === 'paper' && computerPlay === 'scissors' || playerChoice === 'rock' && computerPlay === 'paper') 
                result = 'you lose'
            
                else
                    result = 'draw';
                    
                        return result;
};

// function to play a round of rock paper scissors

function playRound() {
    computerPlay = getCPUChoice();
    playerChoice = answer.value.toLowerCase();
    result = results();
    console.log(computerPlay);
    console.log(playerChoice);
    console.log(result);
};

// event listener for button click

submit.addEventListener('click', playRound);