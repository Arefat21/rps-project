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


function getHumanChoice(){
    const humanInput = prompt("Enter rock, paper, or scissors:");
    return humanInput.toLowerCase(); 
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

        return "It's a tie!"
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
     
    for (let i = 0; i < 5; i++){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        console.log(`%cRound: ${i + 1}`, "color: purple; font-weight: bold; font-size: 12px;");
        console.log(`computer chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Result: ${result}`);

        // Update scores
        if (result === "You win!"){
            humanScore++;
        } else if (result === "You lose!"){
            computerScore++;
        }
        
        console.log(`Current Score = Human: ${humanScore} | Computer: ${computerScore}`);

    }

    // Final winner announcement
    if (humanScore > computerScore) {
        console.log("Match Over: You win the whole game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Match Over: Computer wins the whole game! 🤖");
    } else {
        console.log("Match Over: It's an overall tie!");
    }

}

// Start the game!

playGame();
