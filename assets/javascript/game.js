        // Declaring all of my global variables
        var letterChoicesWaylon = ['w', 'a', 'y', 'l', 'o', 'n']
        var willie = ['w', 'i', 'l', 'l', 'i', 'e']
        var displayArray = ['_', '_', '_', '_', '_', '_']
        var currentGuess = '';
        var previousGuess = [];
        var wins = 0;
        var remainingGuesses = 13;
        var flag = false;
        var count = 0;

        
        // If statement for the first loop.
        if (wins == 0) {


            //Gets a keystroke from the user and saves in in "currentGuess"
            document.onkeyup = function (event) {
                var currentGuess = event.key;
                

                //beginning of loop.
                for (var i = 0; i < remainingGuesses; remainingGuesses--) {


                    
                    // decides if a correct letter was chosen
                    if (currentGuess == willie[0]) {
                        displayArray[0] = 'W';
                    };

                    if (currentGuess == willie[1]) {
                        displayArray[1] = 'I';
                    };

                    if (currentGuess == willie[2]) {
                        displayArray[2] = 'L';
                    };

                    if (currentGuess == willie[3]) {
                        displayArray[3] = 'L';
                    };

                    if (currentGuess == willie[4]) {
                        displayArray[4] = 'I';
                    };

                    if (currentGuess == willie[5]) {
                        displayArray[5] = 'E';
                    };

                    //checks to see if the user has won.
                    if ((displayArray[0] == 'W') &&  (displayArray[1] == 'I') &&  (displayArray[2] == 'L') && (displayArray[3] == 'L') && (displayArray[4] == 'I') && (displayArray[5] == 'E')){
                        wins++;
                    }


            
                    
                    previousGuess[count] = currentGuess; // adds the current guess to the specific index on previousGuess

                    document.getElementById("win-amount").innerHTML = wins; //shows how many wins.
                    document.getElementById("previousGuess-array").innerHTML = previousGuess; //shows their previous guess.
                    var displayArrayString = displayArray.join(' ').trim() //Turns the array into a string for aestethics.
                    document.getElementById("blanks").innerHTML = displayArrayString; // shows how many letters they have right and in what order.
                    document.getElementById("remainingGuesses-amount").innerHTML = remainingGuesses-1; //shows the amounts of guesses remaining.

                    //console logs for debugging
                    console.log("i = " + i);
                    console.log("array [0] = " + displayArray[0]);
                    console.log("guesses remaining = " + remainingGuesses);


                    remainingGuesses--; //Reduces the amount of guesses left.
                    count++; //This counter is being used to make sure the user's guess goes in the correct index of "remaining guesses"
                    return false;//This stops the god-awful key event from looping and lets my loop do the work.


                }
            };
        }