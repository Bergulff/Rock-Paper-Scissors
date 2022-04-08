function computerPlay(){
    let str = ""
    let result = ["Rock", "Paper", "Scissors"];
    
    for (let i = 0; i < result.length; i++){
        str = result[Math.floor(Math.random() * result.length)];
    }
    return str;
}

console.log(computerPlay());
