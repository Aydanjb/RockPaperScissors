let playerWins = 0;
let computerWins = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

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

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        result.textContent = `You Lose!`;
    }
        else if (playerSelection == "rock" && computerSelection == "scissors" ||
                playerSelection == "paper" && computerSelection == "rock" ||
                playerSelection == "scissors" && computerSelection == "paper") {
            playerWins++;
            result.textContent = `You Win!`;
        }
    else {
        result.textContent = `Tie!`;
    }

    score.textContent = `Your Score: ${playerWins} Computer: ${computerWins}`

    if (playerWins === 5) {
        result.textContent = `You win the game! Your Score: ${playerWins}, Computer: ${computerWins}`;
        rock.removeEventListener('click', playRock);
        paper.removeEventListener('click', playPaper);
        scissors.removeEventListener('click', playScissors);
    }
        else if (computerWins === 5) {
            result.textContent = `Computer wins the game! Your Score: ${playerWins}, Computer: ${computerWins}`;
            rock.removeEventListener('click', playRock);
            paper.removeEventListener('click', playPaper);
            scissors.removeEventListener('click', playScissors);
        }
}

function playRock() {
    playRound("rock");
}

function playPaper() {
    playRound("paper");
}

function playScissors() {
    playRound("scissors");
}

rock.addEventListener('click', playRock, false);
paper.addEventListener('click', playPaper, false);
scissors.addEventListener('click', playScissors, false);

