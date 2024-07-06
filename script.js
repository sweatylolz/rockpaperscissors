





function getComputerChoice (randomNumber) {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}


let choice = getComputerChoice()

console.log(choice);

if (choice == 0) {
    choice = "rock"
    console.log(choice)
}
else if (choice == 1) {
    choice = "paper"
    console.log(choice)
}
else {
    choice = "scissors"
    console.log(choice)
}
