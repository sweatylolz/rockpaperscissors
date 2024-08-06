
const buttons = document.querySelectorAll('#btn');
const content = document.querySelector('#scores');
const computerChoiceOutput = document.querySelector('#compChoice');
const computerScoreInfo = document.querySelector('#compScore');
const humanScoreInfo = document.querySelector('#humanScore');

const outcome = document.createElement("p"); 
content.appendChild(outcome);


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.value);
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



function playRound(value){
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice = value;
  const computerChoice = getComputerChoice();
  const computerScoreInfo = document.querySelector('#compScore');
  const humanScoreInfo = document.querySelector('#humanScore');
  
  computerChoiceOutput.innerText = "Computer Chose: ";
  computerChoiceOutput.innerText += " " + computerChoice;


    if (humanChoice === computerChoice) {
        outcome.innerText = "It was a tie.";
        return `It's a Tie, You both picked ${humanChoice}`;
      } 
      else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        computerScoreInfo.textContent += computerScore;
        outcome.innerText = "Computer wins :/";
        return "The Computer Wins! Paper beats Rock";
      } 
      else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        computerScoreInfo.textContent += computerScore;
        outcome.innerText = "Computer wins :/";
        return "The Computer Wins! Scissors beats Paper";
      } 
      else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        computerScoreInfo.textContent += computerScore;
        outcome.innerText = "Computer wins :/";
        return "The Computer Wins! Rock beats Scissors";
      } 
      else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        humanScoreInfo.textContent += humanScore;
        outcome.innerText = "You win!";
        return "Nice! You Win! Rock beats Scissors";
      } 
      else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        humanScoreInfo.textContent += humanScore;
        outcome.innerText = "You win!";
        return "Nice! You Win! Paper beats Rock";
      } 
      else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        humanScoreInfo.textContent += humanScore;
        outcome.innerText = "You win!";
        return "Nice! You Win! Scissors beats Paper";
      }
      
  };