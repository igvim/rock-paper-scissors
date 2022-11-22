//let playerSelection = prompt('Rock, Paper, Scissors, and shoot:');

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    switch (choice){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

//let computerSelection = getComputerChoice();

function oneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return 'Draw! Play again?';
    }
    else if (playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            return 'You win! Rock beats scissors'
        }
        else return 'You lose! Paper covers rock'
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return 'You win! Paper covers rock'
        }
        else return 'You lose! Scissors cuts paper'
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return 'You lose! Rock beats scissors'
        }
        else return 'You win! Scissors cuts paper'
    }
    else return 'Huh? Enter rock, paper, or scissors'
    }

console.log(oneRound('rOck', getComputerChoice()))