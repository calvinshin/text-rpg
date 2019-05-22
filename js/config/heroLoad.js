fs = require("fs");
var initialPrompt = require("./initialPrompt")


const heroLoad = function() {fs.readFile("./userfiles/hero.txt", function(err, data) {
    // If there is no file, then the initial prompts are asked.
    if (err) {
        // Create the global container for the rooms.
        global.container = {
        }
        initialPrompt();
    }
    else{
        // Need to add in details for this file.
        console.log(data);
    }
})};




module.exports = heroLoad;