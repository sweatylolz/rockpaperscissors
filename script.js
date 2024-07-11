

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


function getHumanChoice () {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}



function playGame () {

let humanScore = 0;
let computerScore = 0;
console.log(humanScore);

function playRound () {

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();



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

    for (let i = 0; i < 6; i++){
    playRound();
    console.log("score is human: " + humanScore + " Computer: " + computerScore)
    if (i == 5){
      if (computerScore < humanScore){
        console.log("Human Wins");
      }
      else if (computerScore > humanScore){
        console.log("Computer Wins");
      }
      else {
        console.log("It's a tie");
      } 
    }
    }


};

playGame();




