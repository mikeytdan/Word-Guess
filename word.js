var Letter = require("./letter.js");

var Word = function (word) {
    var word = word.toUpperCase();
    var guessed = false;
    this.letters = [];
    for (letter of word) {
        this.letters.push(new Letter(letter));
    }

    this.displayedWord = function () {
        var string = "";
        for (letter of this.letters) {
            if (string.length > 0) {
                string += " ";
            }

            string += letter;
        }

        return string;
    }

    this.revealedWord = function () {
        var string = "";
        for (letter of this.letters) {
            string += letter.letter;
        }

        return string;
    }

    // Returns true if the entered letter was guessed correctly
    this.guessLetter = function(guessedLetter) {
        var guessedLetter = guessedLetter.toUpperCase();
        var wordGuessed = true;
        var guessedCorrectly = false;
        for (letter of this.letters) {
            if (letter.letter == guessedLetter) {
                guessedCorrectly = true
            }

            letter.guessedLetter(guessedLetter);
            if (!letter.guessed) {
                wordGuessed = false;
            }
        }

        this.guessed = wordGuessed;
        return guessedCorrectly;
    }
}

module.exports = Word;