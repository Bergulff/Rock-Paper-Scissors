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
    
    //computerSelection = computerPlay();
    //playerSelection = playerChoice();
    
    if (computerSelection === playerSelection){
        console.log(`Computer choose: ${computerSelection}`);
        console.log(`U choose: ${playerSelection}`);
        console.log("Draw");
        computerScore++;
        playerScore++;
        //console.log(`Your score and is: ${playerScore}. The computer score is: ${computerScore}`);
    }
    else if((computerSelection === "Rock" && playerSelection === "Scissors") || 
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Rock")){
        console.log(`Computer choose: ${computerSelection}`);
        console.log(`U choose: ${playerSelection}`);
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        //console.log(`The Computerscore is: ${computerScore}`);
    }
    else{
        console.log(`Computer choose: ${computerSelection}`);
        console.log(`U choose: ${playerSelection}`);
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
       //console.log(`Your score is: ${playerScore}`);
    }

    
}
// Lets the user input what to play with (Rock, Paper or Scissors)
function playerChoice(){
    let answer = prompt("Please select either Rock, Paper or Scissors");
    return answer;
}
// Lets u play the game
function game(){
    let gameWinner = "none"
    playerSelection = playerChoice();
    computerSelection = computerPlay();

    for (let i = 1; i <= 5; i++){
        let currentWinner = playRound(playerChoice(), computerPlay());
        //console.log(playerChoice());

        if(currentWinner === playerSelection){
            playerScore++;
        }
        else if(currentWinner === computerSelection){
            computerScore++;
        }
    

    if(playerScore > computerScore){
        gameWinner = "Player";
    }
    else if(computerScore > playerScore){
        gameWinner = "Computer";
    }
    else {
        gameWinner = "Draw";
    }

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    if(playerScore === 5){
        console.log(`Player won the game with: ${playerScore} to ${computerScore}`);
    }
    else if(computerScore === 5){
        console.log(`Computer won the game with: ${computerScore} to ${playerScore}`);
    }

    if(gameWinner === "Draw"){
        console.log("There is no winner, it's a draw \n\n");
    }
    else{
        console.log(`Winner of the match is: ${gameWinner} \n\n`);
    }

 }
 return gameWinner;
}

console.log(game());