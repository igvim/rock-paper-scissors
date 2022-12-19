/*
Get the button
when the button is clicked, set playerSelection equal to that button's class?
get computer choice
run playround with player selection and computer choice
^DONE!
next:
refactor oneRound to update DOM instead of console
*/

const choices = document.querySelectorAll(".choice");
const choiceContainer = document.querySelector(".choiceContainer");
const roundResult = document.createElement("div");
const runningTotal = document.createElement("div");
const gameOver = document.createElement("div");
let wins = 0;
let losses = 0;
let draws = 0;

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        let oneResult = oneRound(playerSelection, getComputerChoice());
        if (oneResult === 0) draws++;
        else if (oneResult > 0) wins++;
        else if (oneResult < 0) losses++;
        runningTotal.textContent = `W: ${wins} L: ${losses} D: ${draws}`
        choiceContainer.appendChild(runningTotal);
        if (wins === 5 || losses === 5) {
            let resultString = wins > losses ? `That's 5 wins! You're the champion!` : `That's 5 losses. Computer wins, pal`;
            gameOver.textContent = resultString;
            choiceContainer.appendChild(gameOver);
        }
    })
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    switch (choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function oneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        roundResult.textContent = "Draw! Play again!";
        choiceContainer.appendChild(roundResult);
        return 0;
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            roundResult.textContent = "You win! Rock beats scissors";
            choiceContainer.appendChild(roundResult);
            return 1;
        }
        else{
            roundResult.textContent = "You lose! Paper covers rock";
            choiceContainer.appendChild(roundResult);
            return -1;
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            roundResult.textContent = "You win! Paper covers rock";
            choiceContainer.appendChild(roundResult);
            return 1;
        }
        else{
            roundResult.textContent = "You lose! Scissors cuts paper";
            choiceContainer.appendChild(roundResult);
            return -1;
        } 
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            roundResult.textContent = "You lose! Rock beats scissors";
            choiceContainer.appendChild(roundResult);
            return -1;
        }
        else{
            roundResult.textContent = "You win! Scissors cuts paper";
            choiceContainer.appendChild(roundResult);
            return 1;
        }
    }
}

/*
function game(){
    let playerWins = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, Scissors, and shoot:");
        let winner = oneRound(playerSelection, getComputerChoice());
        if (winner) playerWins++;
    }
    playerWins >= 3 
    ? console.log(`You won ${playerWins} rounds! You win!`) 
    : console.log(`You won ${playerWins} round(s). You didn"t win.`)
}

game();
*/