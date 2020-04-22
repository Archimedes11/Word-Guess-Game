# Word-Guess-Game

1.0 - Gets a guess from the user
2.0 - Determines if the guess is equal to a letter in the first artist.
    2.1 - If the letter is correct AND hasn't been picked before:
        •Replaces the "_" with the correct letter guessed.
        •Decreases the # of remaining guesses.
    2.2 - If the letter is incorrect AND hasn't been picked before:
        •Adds the letter guessed to "Letters already guessed"
        •Decreases the # of remaining guesses.
3.0 - If remaining guesses = 0 then the game starts over.
4.0 - If they guess all of the letters in the artist's name:
        •Displays a picture of the artist
        •Starts playing a song by the artist
        •Displays the name of the artist and song.
        •Adds 1 to 'Wins'
        •Remaining guesses goes back to 13.
        •Clears the "Letters already guessed"
5.0 - Game starts over, but the artist's picture stays and their song keeps playing.
6.0 - Repeat steps 1-5 except with a different artist.