function Item(name, type, canPickup) {
    this.name = name;
    this.type = type;
    this.canPickup = canPickup;
    // SepcialInspect is overridden if there is a special interaction available.
    this.specialInspect = function() {

    };
}

Item.prototype.Pickup = function() {
    if(this.canPickup = true) {
        global.hero.inventory.push(this);
        console.log("You picked up " + this.name);
    }
    else {
        console.log(this.name + " cannot be picked up.");
    }
}

Item.prototype.inspected = function() {
    console.log("This is a " + this.name + ".");
    this.specialInspect();
}

module.exports = Item;