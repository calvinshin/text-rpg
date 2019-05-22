// Where the hero is created after the initialprompt

Character = require("../constructors/character");
Room = require("../constructors/room");

function heroCreator(value) {
    if(value.choice === "Power") {
        global.hero = new Character(value.name, 10, 7, 3, 1, 0, "Hero")
    }
    else if(value.choice === "Courage") {
        global.hero = new Character(value.name, 10, 3, 7, 1, 0, "Hero")
    }
    else{
        global.hero = new Character(value.name, 10, 5, 5, 1, 0, "Hero")
    }

    // After the hero is created, the first room is created!
    global.container.trainingGrounds = new Room("Training Grounds");
    global.container.trainingGrounds.description();
    // For the sake of testing purposes, the 
    global.container.trainingGrounds.prompt();
}

module.exports = heroCreator;