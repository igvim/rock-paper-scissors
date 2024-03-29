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
const resultsContainer = document.querySelector(".resultsContainer");
const roundResult = document.createElement("div");
const runningTotal = document.createElement("div");
const gameOver = document.createElement("div");
let wins = 0;
let losses = 0;
let draws = 0;

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        oneRound(playerSelection, getComputerChoice());
        runningTotal.textContent = `W: ${wins} L: ${losses} D: ${draws}`
        resultsContainer.appendChild(runningTotal);
        if (wins === 5 || losses === 5) {
            endGame(wins, losses);
            resetGame();
        }
    })
});

function disableChoices(){
    choices.forEach(choice => {
        choice.disabled = true;
    })
}

function enableChoices(){
    choices.forEach(choice => {
        choice.disabled = false;
    })
}

function endGame(w, l){
    let resultString = w > l ? `That's 5 wins! You're an RPS champion!` : `That's 5 losses. Guess computer beats person`;
    gameOver.textContent = resultString;
    resultsContainer.appendChild(gameOver);
    disableChoices();
}

function resetGame(){
    const restartButton = document.createElement("button");
    restartButton.textContent = "Play again"
    resultsContainer.appendChild(restartButton);
    restartButton.addEventListener("click", (e) => {
        wins = losses = draws = 0;
        enableChoices();
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }
    })
}

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
        draws++;
        roundResult.textContent = "Draw! Play again!";
        resultsContainer.appendChild(roundResult);
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            roundResult.textContent = "You win! Rock beats scissors";
            resultsContainer.appendChild(roundResult);
            wins++;
        }
        else{
            roundResult.textContent = "You lose! Paper covers rock";
            resultsContainer.appendChild(roundResult);
            losses++;
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            roundResult.textContent = "You win! Paper covers rock";
            resultsContainer.appendChild(roundResult);
            wins++;
        }
        else{
            roundResult.textContent = "You lose! Scissors cuts paper";
            resultsContainer.appendChild(roundResult);
            losses++;
        } 
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            roundResult.textContent = "You lose! Rock beats scissors";
            resultsContainer.appendChild(roundResult);
            losses++;
        }
        else{
            roundResult.textContent = "You win! Scissors cuts paper";
            resultsContainer.appendChild(roundResult);
            wins++;
        }
    }
}