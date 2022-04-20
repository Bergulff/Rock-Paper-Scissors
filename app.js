// Returning the computers play randomly from the array

const values = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;


function computerPlay(){

    gameValues = values[Math.floor(Math.random() * values.length)];
    
    return gameValues;
}


// Plays a single round of Rock, Paper or Scissors
function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    playerSelection = playerChoice();
    
    if (computerSelection === playerSelection){
        console.log(`Computer choose: ${computerSelection}`);
        console.log(`U choose: ${playerSelection}`);
        console.log("Draw");
        computerScore++;
        playerScore++;
        console.log(`Your score and is: ${playerScore}. The computer score is: ${computerScore}`);
    }
    else if((computerSelection === "Rock" && playerSelection === "Scissors") || 
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Rock")){
        console.log(`Computer choose: ${computerSelection}`);
        console.log(`U choose: ${playerSelection}`);
        console.log("Computer won this round");
        computerScore++;
        console.log(`The Computerscore is: ${computerScore}`);
    }
    else{
        console.log(`Computer choose: ${computerSelection}`);
        console.log(`U choose: ${playerSelection}`);
        console.log("You won this round");
        playerScore++;
        console.log(`Your score is: ${playerScore}`);
    }

    
}
// Lets the user input what to play with (Rock, Paper or Scissors)
function playerChoice(){
    let answer = prompt("Please select either Rock, Paper or Scissors");
    return answer;
}
// Lets u play the game
function game(){

    playRound(); 
    
    if(computerScore >= 5){
        console.log(`Computer won the game: ${computerScore}`);
    }
    else if(playerScore >= 5){
        console.log(`You won the game: ${playerScore}`);
    }

}


//console.log(computerPlay())
//console.log(game())
console.log(game());