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
// The Variable randomNumber and humanInput should be inside the function because:
// Outside the function: Runs once when the page loads. The value never changes.
// Inside the function: Runs every single time the function is called. You get a fresh input every round.

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
    /* If we decared the variable humanScore and computerScore globally "game 1" would work perfectly 
    fine the first time we call the function "playGAme", but when we call the function again to play "game 2"
    it would started from the score where it was. It wouldn't reset to zero.
    */ 
    for (let i = 0; i < 5; i++){
        /* For loop works like while i=0 it executes everything in it, then increment i by one and i became 1 and again executes everything inside
        and at the end when i=5 which is not < 5 and the loop stops here and exit.
        */

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        // We call the functions HERE to get fresh choices for each round.
        // The two variables(humanChoice and ComputerChoice() stores the output of each function.
            
        let result = playRound(humanChoice, computerChoice);
        // We called the playRound function here and stored the output with variable "result".
        console.log(`Round: ${i + 1}`);
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
