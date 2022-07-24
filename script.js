let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
        else if (x == 1) {
            return "paper";

        }
            else if (x == 2) {
                return "scissors";
            }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        return "You Lose this round! Paper beats Rock.";
    }
        else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
            playerWins++;
            return "You Win this round! Rock beats Scissors.";
        }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
                return "Tie this round! Rock ties Rock.";
            }
                else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
                    playerWins++;
                    return "You Win this round! Paper beats Rock.";
                }
                    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
                        computerWins++;
                        return "You Lose this round! Scissors beats Paper.";
                    }
                        else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
                            return "Tie this round! Paper ties Paper.";
                        }
                            else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
                                computerWins++;
                                return "You Lose this round! Rock beats Scissors.";
                            }
                                else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
                                    playerWins++;
                                    return "You win this round! Scissors beats Paper.";
                                }
                                    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") {
                                        return "Tie this round! Scissors ties Scissors.";
                                    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerInput = getComputerChoice();
        let userInput = prompt("Please Choose: Rock, Paper, or Scissors.");
        console.log(playRound(userInput, computerInput))
    }
    if (playerWins > computerWins) {
        console.log(`You win the game! Your Score: ${playerWins}, Computer: ${computerWins}`)
    }
        else if (computerWins > playerWins) {
            console.log(`Computer wins the game! Your Score: ${playerWins}, Computer: ${computerWins}`)
        }
            else if (computerWins == playerWins) {
                console.log(`Tie game! Your Score: ${playerWins}, Computer: ${computerWins}`)
            }
}

playGame();