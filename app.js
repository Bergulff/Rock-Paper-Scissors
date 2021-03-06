// Returning the computers play randomly from the array

const values = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");

function computerPlay(){

    gameValues = values[Math.floor(Math.random() * values.length)];
    
    return gameValues.toLowerCase();
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
    else if((computerSelection === "rock" && playerSelection === "scissors") || 
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")){
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

    return answer.toLowerCase();
}
// Lets u play the game
function game(){
    let gameWinner = "none"
     playerSelection = playerChoice();
     computerSelection = computerPlay();

    for (let i = 1; i < 6; i++){
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

    console.log(`Player: ${playerScore} | Computer: ${computerScore} \n\n`);

    if(playerScore === 5){
        console.log(`Player won the game with: ${playerScore} to ${computerScore} \n\n`);
    }
    else if(computerScore === 5){
        console.log(`Computer won the game with: ${computerScore} to ${playerScore} \n\n`);
    }

    if(gameWinner === playerSelection && gameWinner === computerSelection){
        console.log(`There is no winner, it's a ${gameWinner} \n\n`);
    }
    else if (gameWinner === playerSelection){
        console.log(`Winner of the match is: ${gameWinner} \n\n`);
    }
    else if(gameWinner === computerSelection){
        console.log(`Winner of the match is: ${gameWinner} \n\n`);
    }

 }
 return gameWinner;
}

console.log(game());
