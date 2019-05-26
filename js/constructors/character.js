function Character(name, hp, str, def, lvl, exp, type, room = "None") {
    this.name = name;
    function Stats(hp, str, def) {
        this.hp = hp;
        this.str = str;
        this.def = def;   
    }
    this.max = new Stats(hp, str, def);
    this.cur = new Stats(hp, str, def);
    this.lvl = lvl;
    this.exp = exp;
    this.type = type;
    this.items = [];
}

Character.prototype.attack = function(target, counter) {
    // Damages the target based on a simple arithmatic calculation
    var damage = Math.max((this.cur.str - target.cur.def), 0)
    console.log(this.name + " attacks " + target.name + " for " + damage + " damage!")
    target.cur.hp -= damage

    // Checks if the target has died and distributes EXP
    if(target.cur.hp < 1) {
        console.log("\n" + target.name + " has died!");
        // gainExp();
    }

    // Else the target counterattacks
    else {
        if(counter) {
            // Add in details for the next menu options here!
        }
        else{
            target.attack(this, "isCounter");
        }
    }
}

Character.prototype.checkInventory = function() {

};

module.exports = Character;