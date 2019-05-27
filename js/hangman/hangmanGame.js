var fs = require("fs");
var inquirer = require("inquirer")

var string = "Testing a string."

// input a character and return an object that has different values
function Letter(char) {
    var lower = char.toLowerCase();
    var value = lower.charCodeAt(0);
    this.value = char;

    // If the value is a letter,
    if(value > 96 && value < 123) {
        this.isExposed = false;
        this.current = "_";
    }
    // If the value is a different character (such as a space)
    else {
        this.isExposed = true;
        this.current = char;
    }
}

function Hangman(string) {
    this.letters = [];
    this.string = string;
    this.lives = 5;

    // Create a 26 character array that allows for checking to see if a value has either been guessed already, in the string, or not in it.
    this.guessed = [];

    // Create the letters in the string
    for(var i = 0; i < string.length; i++) {
        this.letters.push(new Letter(string[i]))
    }
    
};

Hangman.prototype.display = function() {
    var string = [];
    for(i=0; i < this.letters.length; i++) {
        string.push(this.letters[i].current)
    }    
    string.join();
    function eachLetter(string) {
        if(string.length === 2) {
            return (string[0] + " " + string[1])
        }
        else{
            return(string[0] + " " + eachLetter(string.slice(1)))
        }
    }
    var hiddenString = eachLetter(string);
    console.log(hiddenString);
}

var test = new Hangman(string);

test.display();



module.exports = game