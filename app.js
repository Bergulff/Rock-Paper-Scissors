// Returning the computers play randomly from the array

const values = ["Rock", "Paper", "Scissors"];

function computerPlay(){

    gameValues = values[Math.floor(Math.random() * values.length)];
    
    return gameValues;
}

//let playerSelection = playerChoice().toLowerCase();



// Plays a single round of Rock, Paper or Scissors
function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    playerSelection = playerChoice();
   
    
    if (computerSelection === playerSelection){
        console.log("Draw");
    }
    else if((computerSelection === "Rock" && playerSelection === "Scissors") || 
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Rock")){
      console.log("Computer won this round");
    }
    else{
        console.log("You won this round");
    }
    
}
// Lets the user input what to play with (Rock, Paper or Scissors)
function playerChoice(){
    let answer = prompt("Please select either Rock, Paper or Scissors");
    return answer;
}

// function game(){

//     let rounds = [5];

//     for (let i = 1; i >= rounds.length; i++){
//         console.log(rounds[i]);
//     }
//     playRound();
// }


//console.log(computerPlay())
//console.log(game())
console.log(playRound());