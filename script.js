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

let computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock."
    }
        else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
            return "You Win! Rock beats Scissors."
        }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
                return "Tie! Rock ties Rock."
            }
                else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
                    return "You Win! Paper beats Rock."
                }
                    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
                        return "You Lose! Scissors beats Paper."
                    }
                        else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
                            return "Tie! Paper ties Paper."
                        }
                            else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
                                return "You Lose! Rock beats Scissors."
                            }
                                else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
                                    return "You Win! Scissors beats Paper."
                                }
                                    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") {
                                        return "Tie! Scissors ties Scissors."
                                    }
                                        else {
                                            return "Please enter a valid selection."
                                        }
}

let userInput = prompt("Please Choose: Rock, Paper, or Scissors.");

console.log(playRound(userInput, computerChoice))