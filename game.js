$(document).ready(function() {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var wins = 0
    var loss = 0
    var userGuessList = []
    var guesses = 10;
    var computerGuess= characters.charAt(Math.floor(Math.random() * characters.length));
   

if(guesses > 1){
 document.onkeydown = function(event) {
        var userEntry = event.key.toUpperCase()
        userGuessList.push(userEntry)
        console.log("User Entry",userEntry);        
        if (userEntry === computerGuess){ wins++;}else{loss++}
        if(wins > 0){
document.getElementById("userEntry").innerHTML = "Your Guess so Far: " + userEntry;        
document.getElementById("userGuestList").innerHTML = "You Won! Refresh the page to play again.";
return;
}

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + loss;
document.getElementById("userEntry").innerHTML = "Your Guess so Far: " + userEntry;

guesses--;

if(guesses < 1){
document.getElementById("wins").innerHTML = "Wins: 0";
document.getElementById("losses").innerHTML = "Losses: 10";
document.getElementById("userGuestList").innerHTML = "Guesses Left: 0";
document.getElementById("userGuestList").innerHTML = "Oh, NO! You have used all your guesses. Refresh the page to begin again.";
return;
}

console.log("Computer guess: ", computerGuess);
console.log("wins: ", wins);
console.log("losses: ", loss);
console.log("Guesses left: ", guesses);
console.log("Your Guess so Far: ", userEntry)


    }
}

});