inquirer = require("inquirer");

heroCreator = require("./heroCreator");

// Prompt the user to fill in some details about themselves
function prompt() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your name?",
            validate: function(response) {
                if(response.length > 0) {
                    return true
                }
                return false
            }
        },
        {
            name: "choice",
            message: "What do you value?",
            // Choices here will affect the heroCreator
            choices: ["Wisdom", "Courage", "Power"],
            type: "list",
        }
    ]).then(function(response) {
        inquirer.prompt([
            {
                name: "verify",
                message: "\nAre these details correct?\n" + "Name: " + response.name + "\n" + "Value: " + response.choice,
                choices: ["Yes", "No"],
                type: "list",
            }
        ]).then(function(verify) {
            if(verify.verify === "Yes") {
                console.log("\n\n" + global.bar + "\n\n\n" + response.name + ", you start your journey in the small town of Mogbuk." +
                "\nYou dream of one day being the known across the land for your " + response.choice.toLowerCase() + ".");
                heroCreator(response);
                // console.log(hero);
            }
            else{
                console.log("\n")
                prompt();
            }
        })
    })
}

module.exports = prompt;