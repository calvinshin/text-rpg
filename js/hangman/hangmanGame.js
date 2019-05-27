var fs = require("fs");
var inquirer = require("inquirer")

var exp = require("../mechanics/exp")


// input a character and return an object that has different values
function Letter(char) {
    var lower = char.toLowerCase();
    var value = lower.charCodeAt(0);
    this.char = char;
    this.value = value;

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

function Hangman(string = "One. Two. Fizz. Four. Buzz.") {
    this.letters = [];
    this.string = string;
    this.lives = 5;

    // Create a 26 character array that allows for checking to see if a value has either been guessed already, in the string, or not in it.
    this.guessed = new Array(26).fill(0);

    // Create the letters in the string
    for(var i = 0; i < string.length; i++) {
        this.letters.push(new Letter(string[i]))
        value = string[i].toLowerCase().charCodeAt(0)
        if(value > 96 && value < 123) {
            value -= 97;
            this.guessed[value] = 1;
        }
    }
    function getSum(total, num) {
        return total + num;
    }

    this.completed = this.guessed.reduce(getSum);
    console.log(this.completed);
};

Hangman.prototype.display = function() {
    var string = [];
    for(i=0; i < this.letters.length; i++) {
        string.push(this.letters[i].current)
    }    
    string.join();

    // recursive function for displaying the letters
    function eachLetter(string) {
        if(string.length === 2) {
            return (string[0] + " " + string[1])
        }
        else{
            return(string[0] + " " + eachLetter(string.slice(1)))
        }
    }

    // Using the eachLetter recursive function to create a string
    var hiddenString = eachLetter(string);

    // display the string
    console.log(global.spacer);
    console.log(hiddenString);
    
    // if completed is still > 0, prompt
    if(this.completed > 1) {
        this.prompt();
    }
}

Hangman.prototype.prompt = function() {
    This = this;
    inquirer.prompt([
        {
            name: "guess",
            message: "What letter would you like to guess?",
            validate: function(response) {
                var lower = response.toLowerCase().charCodeAt(0)
                if(response.length === 1 && lower > 96 && lower < 123) {
                    return true
                }
                return false
            }
        }
    ]).then(function(response) {
        // Check the response here
        value = response.guess.toLowerCase().charCodeAt(0);
            if(This.guessed[value - 97] > 0) {
                console.log("The page shimmers and new characters appear.");
                // update the current value of the object and set the isExposed to true
                for(var j = 0; j < This.letters.length; j++) {
                    var current = This.letters[j];
                    if(current.value === value) {
                        current.isExposed = true;
                        current.current = current.char;
                    }
                }

                // update the guessed array value to -2
                This.guessed[value] = -2;
                This.completed -= 1;

                if(This.completed === 0) {
                    console.log("This game is completed!");
                    exp(10 + (This.lives * 10));
                    global.current.inspect();
                }
                else {
                    This.display();
                }
            }
            else if(This.guessed[value] === -2) {
                console.log("Your mind realizes that you've already guessed this letter!");
                This.display();
            }
            else{
                console.log("The page glows faintly and you feel it turn hot for a moment.");
                This.lives -= 1;
                if(This.lives === 0) {
                    console.log("... almost too hot! All of the characters vanish on the page. Perhaps you can try again.")
                    global.current.inspect();
                }
                else{
                    console.log("You can tell the page will only let you fail " + This.lives + " more " + (This.lives > 1 ? "times!" : "time!"));
                    This.display();
                }
            }

    })
}

// var test = new Hangman(string);

// test.display();



module.exports = Hangman