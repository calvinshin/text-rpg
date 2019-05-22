var inquirer = require("inquirer");

function Room(name, ) {
    this.name = name,
    this.items = [],
    this.living = ["Mongo", "Ed", "Others"],
    this.description = function() {console.log("Current location: " + name)},
    this.isActiveRoom = false
}

Room.prototype.prompt = function() {
    console.log(global.spacer)
    if(this.items.length >= 1) {
        console.log("You see " + this.items + " on the ground. ")
    }
    console.log(this.living.length);
    if(this.living.length >= 1) {
        console.log("You see " + this.living + " nearby. ")
    }

    inquirer.prompt([
        {
            name: "choice",
            message: "What would you like to do?",
            // Choices here will affect the heroCreator
            choices: ["put options here", "Courage", "Power"],
            type: "list",
        }
    ]).then(function(response) {
        // Complete!
    })
}

module.exports = Room;