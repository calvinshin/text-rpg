var inquirer = require("inquirer");

function Room(name, ) {
    this.name = name,
    this.items = [],
    this.living = [],
    this.description = function() {console.log("Current location: " + name)},
    this.isActiveRoom = false
}

Room.prototype.inspect = function() {
    console.log(global.spacer)
    if(this.items.length >= 1) {
        console.log("You see " + global.displayArray(this.items) + " on the ground. ")
    }
    if(this.living.length >= 1) {
        console.log("You see " + global.displayArray(this.living) + " nearby. ")
    }
    this.choices = ["Move"];
    if(this.items.length > 0) {
        this.choices.push("Inspect");
        // this.choices.push("Pick up");
    }
    if(this.living.length > 0) {
        this.choices.push("Talk");
        this.choices.push("Attack");
    }
    this.prompt();
};


Room.prototype.prompt = function() {
    var This = this;
    inquirer.prompt([
        {
            name: "choice",
            message: "What would you like to do?",
            // Choices here will affect the heroCreator
            choices: this.choices,
            type: "list",
        }
    ]).then(function(response) {
        // Complete!
        if(response.choice === "Talk") {
            console.log("They seem to ignore your presence...");
            This.prompt();
        }
        else if(response.choice === "Attack") {
            console.log("You think twice about attacking them...")
            This.prompt();
        }
        else if(response.choice === "Inspect") {
            // As of the intention of this game, will be forcing the inspection of the first item
            This.items[0].inspected();
        }
        else if(response.choice === "Move") {
            console.log("You can't seem to find your way out of here...")
            This.prompt();
        };
    })
}

module.exports = Room;