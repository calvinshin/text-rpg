// function to take a value and then increment the hero's exp by an amount.


function expGain(amount) {
    global.hero.exp += amount;
    console.log(hero.name + " gains " + amount + " exp!")
}


module.exports = expGain;