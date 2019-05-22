function Item(name, type) {
    this.name = name,
    this.type = type
    this.inspected = console.log("This is a " + name + ".")
}

module.exports = Item;