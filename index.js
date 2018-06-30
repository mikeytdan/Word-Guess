var Word = require("./word.js");
var inquirer = require("inquirer");

var word;
var words = ["Mathmatics", "Science", "Programming", "Computer", "Teacher", "Chemistry", "Biology", "Geometry", "Trigonometry", "Algebra"];
var remainingGuesses;

function newGame() {
    remainingGuesses = 10;
    var selectedWord = words[Math.ceil(Math.random() * words.length)];
    word = new Word(selectedWord);
    console.log("Remaining guesses: " + remainingGuesses);
    console.log("Initial word: " + word.displayedWord());
    promptGuessLetter();
}

function promptGuessLetter() {
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter",
            validate: function (input) {
                return input.length == 1 && /^[a-z]+$/i.test(input);
            }
        }
    ]).then(function (response) {
        var guessedCorrectly = word.guessLetter(response.guess);
        if (!guessedCorrectly) {
            remainingGuesses--;
            if (remainingGuesses <= 0) {
                console.log("You lost!");
                console.log("The correct word is: " + word.revealedWord());
                promptNewGame();
                return
            } else {
                console.log("Remaining guesses: " + remainingGuesses);
            }
        }

        console.log(word.displayedWord());
        if (word.guessed) {
            console.log("You guessed the word!");
            promptNewGame();
        } else {
            promptGuessLetter();
        }
    });
}

function promptNewGame() {
    inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function (response) {
        if (response.answer == "No") {
            // No
            return
        }

        // Yes, play again
        newGame();
    });
}

newGame();