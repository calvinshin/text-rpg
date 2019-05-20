// Loading screen to check for files
console.log("Loading ... ");

// Require various documents for the screen
var inquirer = require("inquirer");
var fs = require("fs");

// Require other files
var heroLoad = require("./js/config/heroLoad")
var checkHero = require("./js/config/checkHero")
// checkHero(heroLoad());

console.log("\n\nWelcome to Amora, a text-based mini adventure.");

inquirer.prompt([
    {
        name: "name",
        message: "What is your name?"
    },
    {
        name: "choice",
        message: "What do you value?"
    }
]).then(function(response) {
    console.log(response.name + "\n" + response.choice)
})