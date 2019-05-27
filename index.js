// Loading screen to check for files
console.log("Loading ... ");

// Require various documents for the screen
var inquirer = require("inquirer");
var fs = require("fs");

// Require other files
var heroLoad = require("./js/config/heroLoad")
var checkHero = require("./js/config/checkHero")

global.bar = "----------------------------------------";
global.spacer = "\n\n----------------------------------------\n\n";

global.displayArray = function(array) {
    if(Array.isArray(array)) {
        var length = array.length;
        var result = array[0].name;
        if(length === 2) {
            return(array[0].name + " and " + array[1].name);
        }
        else{
            for(i = 1; i < length; i++) {
                if(i + 1 === length) {
                    result += ", and " + array[i].name;
                }
                else{
                    result += ", " + array[i].name;
                }
            }
        }
        return result;
    }
    else{
        return array;
    }
}

console.log("\n\nWelcome to Amora, a text-based mini adventure.")
console.log(global.spacer);

// Attempts to heroLoad, or load all the data in a text file. Without anything, the game is initialized.
heroLoad();

module.exports = bar