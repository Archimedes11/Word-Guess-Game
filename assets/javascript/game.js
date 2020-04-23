// Declaring all of my global variables
var letterChoicesWaylon = ['w', 'a', 'y', 'l', 'o', 'n']
var willie = ['w', 'i', 'l', 'l', 'i', 'e']
var displayArray = ['_', '_', '_', '_', '_', '_']
var currentGuess = '';
var previousGuess = [];
var wins = 0;
var remainingGuesses = 12;
var remainingGuessesNum = 12;
var flag = false;
var count = 0;



//Gets a keystroke from the user and saves in in "currentGuess"
document.onkeyup = function (event) {
    var currentGuess = event.key;


    //beginning of loop.
    for (i = 0; i < remainingGuesses; remainingGuesses--) {
        console.log(remainingGuesses);


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
        if ((displayArray[0] == 'W') && (displayArray[1] == 'I') && (displayArray[2] == 'L') && (displayArray[3] == 'L') && (displayArray[4] == 'I') && (displayArray[5] == 'E')) {
            wins=1;

        }

        var doesIncludeCounter = 0;
        for (i = 0; i < previousGuess.length; i++) {
            if (previousGuess[i] == (currentGuess)) {
                doesIncludeCounter++;
            }
        }
        if (doesIncludeCounter == 0) {
            previousGuess[count] = currentGuess; // adds the current guess to the specific index on previousGuess
            count++; //This counter is being used to make sure the user's guess goes in the correct index of "previous guesses"    
        }
        else {
            remainingGuesses++;
        }







        remainingGuesses--;

        document.getElementById("remainingGuesses-amount").innerHTML = remainingGuesses; //shows the amounts of guesses remaining.
        document.getElementById("win-amount").innerHTML = wins; //shows how many wins.
        document.getElementById("previousGuess-array").innerHTML = previousGuess; //shows their previous guess.
        var displayArrayString = displayArray.join(' ').trim() //Turns the array into a string for aestethics.
        document.getElementById("blanks").innerHTML = displayArrayString; // shows how many letters they have right and in what order.

        if ((remainingGuesses == 0) && (wins == 0)) {
            letterChoicesWaylon = ['w', 'a', 'y', 'l', 'o', 'n']
            willie = ['w', 'i', 'l', 'l', 'i', 'e']
            displayArray = ['_', '_', '_', '_', '_', '_']
            currentGuess = '';
            previousGuess = [];
            wins = 0;
            remainingGuesses = 12;
            remainingGuessesNum = 12;
            flag = false;
            count = 0;
        }
        return false;//This stops the god-awful key event from looping and lets my loop do the work.
    }
};

