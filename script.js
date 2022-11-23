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

function oneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        console.log('Draw! Play again?')
        return false;
    }
    else if (playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            console.log('You win! Rock beats scissors')
            return true;
        }
        else{
            console.log('You lose! Paper covers rock')
            return false;
        }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            console.log('You win! Paper covers rock')
            return true;
        }
        else{
            console.log('You lose! Scissors cuts paper')
            return false;
        } 
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            console.log('You lose! Rock beats scissors')
            return false;
        }
        else{
            console.log('You win! Scissors cuts paper')
            return true;
        }
    }
    else{
        console.log('Huh? Enter rock, paper, or scissors')
        return false;
    }
}

function game(){
    let playerWins = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Rock, Paper, Scissors, and shoot:');
        let winner = oneRound(playerSelection, getComputerChoice());
        if (winner) playerWins++;
    }
    playerWins >= 3 
    ? console.log(`You won ${playerWins} rounds! You win!`) 
    : console.log(`You won ${playerWins} round(s). You didn't win.`)
}

game();