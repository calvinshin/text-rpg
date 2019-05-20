fs = require("fs");

const heroLoad = function() {fs.readFile("./userfiles/hero.txt", function(err, data) {
    if (err) {
        return "no hero"
    }
    return data
})};

module.exports = heroLoad;