let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function getComputerChoice (randomNumber) {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

if (computerChoice == 0) {
    computerChoice = "rock";
}
else if (computerChoice == 1) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}

function getHumanChoice (x) {
    x = prompt("Choose rock, paper, or scissors.").toLowerCase();
    return x;
}

function playRound (humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return `It's a Tie, You both picked ${humanChoice}`;
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return "The Computer Wins! Paper beats Rock";
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return "The Computer Wins! Scissors beats Paper";
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return "The Computer Wins! Rock beats Scissors";
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        return "Nice! You Win! Rock beats Scissors";
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return "Nice! You Win! Paper beats Rock";
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return "Nice! You Win! Scissors beats Paper";
      }
    }


console.log("The computer chose "  + computerChoice + ".");
console.log("You chose " + humanChoice + ".");
console.log(playRound(humanChoice, computerChoice));
console.log("Your Score: " + humanScore + ".");
console.log("Computer Score: " + computerScore + ".");