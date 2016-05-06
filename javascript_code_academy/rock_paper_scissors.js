var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        console.log("The result is a tie!");    
    }  else {
    	if  (userChoice === "rock" && computerChoice ==="scissors") {
    		console.log("rock wins"); 
    	} else if (userChoice === "rock" && computerChoice ==="paper") {
    		console.log("paper wins"); 
    	} else if (userChoice === "paper" && computerChoice ==="rock") {
    		console.log("paper wins"); 
    	} else if (userChoice === "paper" && computerChoice ==="scissors") {
    		console.log("scissors wins"); 
    	} else if (userChoice === "scissors" && computerChoice ==="rock") {
    		console.log("rock wins"); 
    	} else if (userChoice === "scissors" && computerChoice ==="paper") {
    		console.log("scissors wins"); 
    	} else {
    	    console.log("Input inappropriate!");
    	}
    }
}