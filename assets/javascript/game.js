$(document).ready(function() {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var wins = 0
    var loss = 0
    var userGuessList = []

    var computerGuess= characters.charAt(Math.floor(Math.random() * characters.length));
   

    document.onkeydown = function(event) {
        var userentry = event.key.toUpperCase()
        userGuessList.push(userentry)
        // console.log("User Entry",userentry,"Computer Guess",computerGuess);
        document.getElementById("userGuestList").innerHTML = userentry
        if (userentry === computerGuess){ wins++;}else{loss++}



    }
});
