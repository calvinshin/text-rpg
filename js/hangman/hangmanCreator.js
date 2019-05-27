var Item = require("../constructors/item");
var inquirer = require("inquirer");
var Hangman = require("./hangmanGame")

function hangmanCreator(room) {
    var hangmanGame = new Item("hangman game", "Game", true);
    
    // Create the specialInspect for Hangman
    hangmanGame.specialInspect = function() {
        console.log("It looks like you can play a runic game!");
        inquirer.prompt([
            {
                name: "choice",
                message: "Would you like to play?",
                // Choices here will affect the heroCreator
                choices: ["Yes", "No"],
                type: "list",
            }
        ]).then(function(response) {
            if(response.choice === "Yes") {
                // Play game
                var test = new Hangman();
                test.display();
            }
            else{
                // go back to the room's inspection
                room.inspect();
            }
        })
    }
    // Push item into the room
    if(room) {
        room.items.push(hangmanGame);
    }    
    else{
        hangmanGame.specialInspect();
    }
}

module.exports = hangmanCreator;