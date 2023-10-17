// variables

let computerPlay;
let playerChoice;
let result;

// function to get choice and store it

function getCPUChoice() {
    const computerSelection = ["rock" , "paper" , "scissors"];
    const randomCPU = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return randomCPU.toLowerCase()
};

// function to get player input & const to prompt / store input

function getPlayerChoice() {
    const userInput = prompt('Rock, Paper, or Scissors? ');
    return userInput.toLowerCase()
};

// code for win condition

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
    playerChoice = getPlayerChoice();
    result = results();
    console.log(computerPlay);
    console.log(playerChoice);
    console.log(result);
};


// rock > scissors , scissors > paper , paper > rock

// save for later document.getElementById('results').innerHTML = "The winner is " + playerChoice + computerPlay 