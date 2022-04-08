// Returning the computers play randomly from the array
function computerPlay(){
    let str = ""
    let result = ["Rock", "Paper", "Scissors"];
    
    for (let i = 0; i < result.length; i++){
        str = result[Math.floor(Math.random() * result.length)];
    }
    return str;
}
// Plays a single round of Rock, Paper or Scissors
// function singleRound(playerSelection, computerSelection){
//     computerSelection = computerPlay();
//     playerSelection = " ";
    

// }
// Lets the user input what to play with (Rock, Paper or Scissors)
function playerSelection(answer){
    answer = prompt("Please select either Rock, Paper or Scissors");
    return answer;
}

//console.log(singleRound(playerSelection(),computerPlay()));
//console.log(playerSelection());
//console.log(computerPlay());
