// Default required for each room
Room = require("../constructors/room");
Character = require("../constructors/character");
Item = require("../constructors/item");

// Specific items or other things required;
hangman = require("../hangman/hangmanCreator")


function trainingGrounds() {
    // After the hero is created, the first room is created!
    global.container.trainingGrounds = new Room("Training Grounds");
    global.container.trainingGrounds.description();
    // creating a new hangman game
    hangman(global.container.trainingGrounds);

    // recursive loop to inspect;
    global.container.trainingGrounds.inspect();
}

module.exports = trainingGrounds;