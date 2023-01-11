// Dice rolling functions
function dieFour(diceQuantity){
    let result = 0
    for (i = 1; i <= diceQuantity; i++){
        result += Math.ceil(Math.random() * 4);
    }
    return result;
}
function dieSix(diceQuantity){
    let result = 0
    for (i = 1; i <= diceQuantity; i++){
        result += Math.ceil(Math.random() * 6);
    }
    return result;
}
function dieEight(diceQuantity){
    let result = 0
    for (i = 1; i <= diceQuantity; i++){
        result += Math.ceil(Math.random() * 8);
    }
    return result;
}
function dieTen(diceQuantity){
    let result = 0
    for (i = 1; i <= diceQuantity; i++){
        result += Math.ceil(Math.random() * 10);
    }
    return result;
}
function dieTwelve(diceQuantity){
    let result = 0
    for (i = 1; i <= diceQuantity; i++){
        result += Math.ceil(Math.random() * 12);
    }
    return result;
}
function dieTwenty(diceQuantity){
    let result = 0
    for (i = 1; i <= diceQuantity; i++){
        result += Math.ceil(Math.random() * 20);
    }
    return result;
}

// Establish function to build character sheets from input:
function makeCharacter(chaName, chaLevel, chaClass, chaRace, chaBackg) {
    let chaStats = {
        str: dieSix(3),
        dex: dieSix(3), 
        con: dieSix(3),
        int: dieSix(3),
        wis: dieSix(3),
        cha: dieSix(3)
    }
    return {
        _name: chaName,
        _chaLevel: chaLevel,
        _classLevel: chaLevel,
        _classMain: chaClass,
        _race: chaRace,
        _bg: chaBackg,
        _stats: chaStats
    }
}

// console.log(makeCharacter('Trevor', 1, 'Fighter', 'Half-Orc', 'Soldier')._stats.str);