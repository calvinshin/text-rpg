var Item = require("../constructors/item");
var inquirer = require("inquirer");
var game = require("./hangmanGame")

function hangmanCreator(room) {
    var hangmanGame = new Item("hangman game", "Game", true);
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
                game();
            }
            else{
                // go back to the room's inspection
                room.inspect();
            }
        })
    }
    room.items.push(hangmanGame);
}

module.exports = hangmanCreator;