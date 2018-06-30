var Letter = function(letter) {
    this.letter = letter.toUpperCase();
    this.guessed = false;

    this.toString = function() {
        return this.guessed ? this.letter : "_";
    }

    this.guessedLetter = function(letter) {
        if (this.letter == letter.toUpperCase()) {
            // The user guess the letter, set `guessed` to true so `displayedLetter` will return the letter
            this.guessed = true;
        }
    }
}

module.exports = Letter;