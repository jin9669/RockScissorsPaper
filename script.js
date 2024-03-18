
//getting computer choice//
function getComputerChoice() {
    let x = Math.floor((Math.random()*3));
    switch(x){
        case 0: 
            computerSelection = "rock";
            break;
        case 1: 
            computerSelection = "scissors";
            break;
        case 2: 
            computerSelection = "paper";
            break;
    }
        console.log(computerSelection);
        return computerSelection;
   }

   //prompting playerChoice//

   function getPlayerChoice() {
    let playerSelection = prompt("Please enter 'rock' 'scissors' or 'paper'").toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

    function gameOne() {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        console.log(getPlayerChoice);
        console.log(getComputerChoice);

        if (playerSelection === "rock" && computerSelection === "rock"){
            result = "Draw! You both chose rock!";}
        else if (playerSelection === "rock" && computerSelection === "scissors"){
            result = "You win! Rock beats scissors!"}
        else if (playerSelection === "rock" && computerSelection === "paper"){
            result = "You lose! Rock loses to paper!";}
        else if (playerSelection === "scissors" && computerSelection === "scissors"){
            result = "Draw! You both chose scissors!";}
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            result = "You win! Scissors beats paper!"}
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            result = "You lose! Scissors loses to rock!"}
        else if (playerSelection === "paper" && computerSelection === "paper"){
            result = "Draw! You both chose paper"}
        else if (playerSelection === "paper" && computerSelection === "rock"){
            result = "You win! Paper beats rock!"}
        else if (playerSelection === "paper" && computerSelection === "scissors"){
            result = "You lose! Paper loses to scissors"}
        else {result = "DEFAULT VALUE"}

        console.log(result);
        return result;
        
        }
        