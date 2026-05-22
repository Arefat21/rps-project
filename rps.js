function getComputerChoice(max, min){
    const randomNumber = Math.floor(Math.random()*(max-min)) + min;

    if (randomNumber <= 4){
        return "rock";
    } else if (randomNumber <= 8) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerChoice = getComputerChoice(13, 1);
console.log(computerChoice);

const humanChoice = prompt("Just enter valid choice:");
function getHumanChoice(){
    return humanChoice;

}

console.log(getHumanChoice());

let humanScore;
let computerScore;
