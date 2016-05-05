// Check if the user is ready to play!

confirm("Are you ready to play?");

var age = prompt("What's your age");

if (age < 13) {
    console.log("You are allowed to play but I take no responsibilties");
} else {
    console.log("Game on!");
}

var story_line_1 = "You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'";
console.log(story_line_1);

story_line_2 = "Suddenly, Bieber stops and says, 'Who wants to race me?'";
console.log(story_line_2);

var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");    
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

//ask for feedback.

var feedback = prompt("Please rate the game out of 10");

if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.");
}