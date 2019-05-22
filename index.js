// Loading screen to check for files
console.log("Loading ... ");

// Require various documents for the screen
var inquirer = require("inquirer");
var fs = require("fs");

// Require other files
var heroLoad = require("./js/config/heroLoad")
var checkHero = require("./js/config/checkHero")

global.bar = "----------------------------------------";
global.spacer = "\n\n\n----------------------------------------\n\n"

console.log("\n\nWelcome to Amora, a text-based mini adventure." + global.spacer);

// Attempts to heroLoad, or load all the data in a text file. Without anything, the game is initialized.
heroLoad();

module.exports = bar