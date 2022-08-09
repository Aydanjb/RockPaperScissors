let playerWins = 0;
let computerWins = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

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
    if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        return "You Lose!";
    }
        else if (playerSelection == "rock" && computerSelection == "scissors" ||
                playerSelection == "paper" && computerSelection == "rock" ||
                playerSelection == "scissors" && computerSelection == "paper") {
            playerWins++;
            return "You Win!";
        }
    else {
        return "Tie!"
    }
}

function playGame(userInput) {
    for (let i = 0; i < 5; i++) {
        let computerInput = getComputerChoice();
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



rock.addEventListener('click', function(){
    playGame("rock");
}, false);

paper.addEventListener('click', function(){
    playGame("paper");
}, false);

scissors.addEventListener('click', function(){
    playGame("scissors");
}, false);