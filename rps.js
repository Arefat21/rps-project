function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()* 3);
    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playRound = function(humanSelection, computerSelection){
    if ((humanSelection === "rock" && computerSelection === "scissors") ||
       (humanSelection === "scissors" && computerSelection === "paper") ||
       (humanSelection === "paper" && computerSelection === "rock")
    ){
        return "You win!";
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "scissors" && humanSelection === "paper" ) ||
        (computerSelection === "paper" && humanSelection === "rock")
    ){
        return "You lose!";
    } else {
        return "It's a tie!";
    }
};

// GLOBAL STATE: These variables live outside functions so they persist across clicks
let humanScore = 0;
let computerScore = 0;
let round = 0;

// This function handles a single turn every time a button is clicked
function handleRound(humanChoice) {
    // 1. Don't play if the game is already over
    if (round >= 5) return; 

    // 2. Play the round
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    round++;

    // 3. Update the global scores
    if (result === "You win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }

    // 4. Target the HTML div and display the current round results
    const div = document.querySelector("div");
    let message = `\n Round ${round}: You chose: ${humanChoice} | Computer chose: ${computerChoice}.\n`;
    message += `Standing : ${result} \n`
    message += `Score: Human ${humanScore} - Computer ${computerScore}`;

    // 5. Check if the match is officially over
    if (round === 5) {
        message += "\n\nMatch Over: ";
        if (humanScore > computerScore) {
            message += "You win the whole game! 🎉";
        } else if (computerScore > humanScore) {
            message += "Computer wins the whole game! 🤖";
        } else {
            message += "It's an overall tie!";
        }
    }

    div.textContent = message;
};

// BUTTON EVENT LISTENERS
const btnRock = document.querySelector(".btn1");
btnRock.addEventListener("click", () => {
    handleRound("rock");
});

const btnPaper = document.querySelector(".btn2");
btnPaper.addEventListener("click", () => {
    handleRound("paper");
});

const btnScissor = document.querySelector(".btn3");
btnScissor.addEventListener("click", () => {
    handleRound("scissors");
});

const btn = document.querySelector(".re-set");
btn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0 ;
    round = 0

    const div = document.querySelector("div");
    div.textContent = "Game over! Start again."
    
});