
//getting computer choice//

function getComputerChoice() {
    let x = Math.floor((Math.random()*3));
    switch(x){
        case 0: 
            return "Rock";
            break;
        case 1: 
            return "Scissors";
            break;
        case 2: 
            return "Paper";
            break;
    }
   }

   //prompting playerChoice//

   function getPlayerChoice() {
    let playerPrompt = prompt("Please enter 'rock' 'scissors' or 'paper'").toLowerCase();
    console.log(playerPrompt);
}


   