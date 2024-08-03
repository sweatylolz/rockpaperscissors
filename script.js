
const buttons = document.querySelectorAll('#btn');
const scores = document.querySelector('#scores');
const computerChoiceOutput = document.querySelector('#compChoice');
const computerScoreInfo = document.querySelector('#compScore');
const humanScoreInfo = document.querySelector('#humanScore');



buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playGame(btn.value);
  });
});


function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
    return "rock";
    }
    else if (randomNumber == 1) {
    return "paper";
    }   
    else {
    return "scissors";
    }
}

function playGame (value) {

let humanScore = 0;
let computerScore = 0;

function playRound() {

  let humanChoice = value;
  const computerChoice = getComputerChoice();

  computerChoiceOutput.innerText = computerChoiceOutput.innerText + computerChoice;
  console.log("The computer chose "  + computerChoice + ".");
  console.log("You chose " + humanChoice + ".");


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
    
    playRound();
      if (computerScore < humanScore){
        console.log("Human Wins");
        humanScoreInfo.textContent = humanScoreInfo.textContent + humanScore;
      }
      else if (computerScore > humanScore){
        console.log("Computer Wins");
        computerScoreInfo.textContent = computerScoreInfo.textContent + computerScore;
      }
      else {
        console.log("It's a tie");
      } 
};



