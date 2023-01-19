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


// Calculate stat modifier function.
const statArray = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

function findStatMod(statScore){
    let modVal = Math.floor(Math.abs(statScore - 10) / 2);
    if (statScore < 10){
        modVal = modVal * -1
    }
    return modVal
};

// Establish various items with which characters may be proficient.
const lightArmor = [];
const mediumArmor = [];
const heavyArmor = [];
const shields = [];
const simpleWeapons = [];
const martialWeapons = [];
const armor = [lightArmor, mediumArmor, heavyArmor, shields];
const weapons = [simpleWeapons, martialWeapons];

// Describe and group all the classes.
const BarbarianClass = {
    className: 'Barbarian',
    classType: 'martial',
    hitDie: 12,
    proficient: [],
    classSaveThrows: ['str', 'con']
}
const BardClass = {
    className: 'Bard',
    classType: 'caster',
    hitDie: 8,
    proficient: [],
    classSaveThrows: ['dex', 'cha']
}
const ClericClass = {
    className: 'Cleric',
    classType: 'caster',
    hitDie: 8,
    proficient: [],
    classSaveThrows: ['wis', 'cha']
}
const DruidClass = {
    className: 'Druid',
    classType: 'caster',
    hitDie: 8,
    proficient: [],
    classSaveThrows: ['int', 'wis']
}
const FighterClass = {
    className: 'Fighter',
    classType: 'martial',
    hitDie: 10,
    proficient: [lightArmor, mediumArmor, heavyArmor, shields, simpleWeapons, martialWeapons],
    classSaveThrows: ['str', 'con']
}
const MonkClass = {
    className: 'Monk',
    classType: 'martial',
    hitDie: 8,
    proficient: [],
    classSaveThrows: ['dex', 'wis']
}
const PaladinClass = {
    className: 'Paladin',
    classType: 'halfCast',
    hitDie: 10,
    proficient: [],
    classSaveThrows: ['wis', 'cha']
}
const RangerClass = {
    className: 'Ranger',
    classType: 'halfCast',
    hitDie: 10,
    proficient: [],
    classSaveThrows: ['str', 'dex']
}
const RogueClass = {
    className: 'Rogue',
    classType: 'martial',
    hitDie: 8,
    proficient: [],
    classSaveThrows: ['dex', 'int']
}
const SorcererClass = {
    className: 'Sorcerer',
    classType: 'caster',
    hitDie: 6,
    proficient: [],
    classSaveThrows: ['con', 'cha']
}
const WarlockClass = {
    className: 'Warlock',
    classType: 'warlock',
    hitDie: 8,
    proficient: [],
    classSaveThrows: ['wis', 'cha']
}
const WizardClass = {
    className: 'Wizard',
    classType: 'caster',
    hitDie: 6,
    proficient: [],
    classSaveThrows: ['int', 'wis']
}

const classList = [BarbarianClass, BardClass, ClericClass, DruidClass, FighterClass, 
    MonkClass, PaladinClass, RangerClass, RogueClass, SorcererClass, WarlockClass, WizardClass]

// Describe and group all the races.
const dwarf = {
    raceName: 'dwarf',
    darkvision: true,
    bonus2: ['con'],
    bonus1: []
}
const human = {
    raceName: 'human',
    darkvision: false,
    bonus2: [],
    bonus1: ['str', 'con', 'dex', 'int', 'wis', 'cha']
}
const elf = {
    raceName: 'elf',
    darkvision: true,
    bonus2: ['dex'],
    bonus1: []
}
const halfOrc = {
    raceName: 'halfOrc',
    darkvision: true,
    bonus2: ['str'],
    bonus1: ['con']
}
const halfElf = {
    raceName: 'halfElf',
    darkvision: false,
    bonus2: ['cha'],
    bonus1: ['dex', 'int']
}
const halfling = {
    raceName: 'halfling',
    darkvision: false,
    bonus2: ['dex'],
    bonus1: []
}
const gnome = {
    raceName: 'gnome',
    darkvision: true,
    bonus2: ['int'],
    bonus1: []
}
const tiefling = {
    raceName: 'tiefling',
    darkvision: true,
    bonus2: ['cha'],
    bonus1: ['int']
}

const raceList = [human, elf, halfOrc, halfElf, halfling, gnome, tiefling]

// Establish function to build character sheets from input:
function makeCharacter(chaName, chaLevel, chaClass, chaRace, chaBackg) {
    // First, let's roll stats.
    let str = dieSix(3);
    let dex = dieSix(3);
    let con = dieSix(3);
    let int = dieSix(3);
    let wis = dieSix(3);
    let cha = dieSix(3);
    let chaStats = [str, dex, con, int, wis, cha];

    // Establish character proficiency bonuses.
    let chaProf = 2
    if (chaLevel >= 5 && chaLevel < 11) {
        chaProf = 3
    } else if (chaLevel >= 11 && chaLevel < 17) {
        chaProf = 4
    } else if (chaLevel >= 17 && chaLevel <= 20) {
        chaProf = 5
    }
    
    
    // Now let's figure out your starting class and assign it.
    for (i = 0; i < classList.length; i++){
        if (chaClass === classList[i].className) {
            chaClass = classList[i];
        }
    }
    // Find race and assign properties.
    for (i = 0; i < raceList.length; i++){
        if (chaRace === raceList[i].raceName) {
            chaRace = raceList[i];
        }
    } 
    // Assign racial stat score modifiers.
    for (i = 0; i < chaStats.length; i++){
        for (j = 0; j < Object.keys(chaRace.bonus2).length; j++) {
            if (chaRace.bonus2[j] === statArray[i]) {
                chaStats[i] += 2;
            }
        }
        for (k = 0; k < Object.keys(chaRace.bonus1).length; k++) {    
            if (chaRace.bonus1[k] === statArray[i]) {
                chaStats[i] ++;
            }
        }
    }

    // Calculate starting hit points.
    let startHitPoints = chaClass.hitDie + findStatMod(con);
    
    //TODO
    // - create a generic .attack() method
    // - create .saveThrow(STAT) method
    // - assign spell slots based on classType


    // Output the character!
    return {
        _name: chaName,
        _chaLevel: chaLevel,
        _classLevel: chaLevel,
        _classMain: chaClass,
        _race: chaRace,
        _bg: chaBackg,
        _stats: chaStats,
        _hp: startHitPoints,
        // throwSave(saveStat){
        //     let saveMod = findStatMod(saveStat);
        //     for (stat in chaClass.classSaveThrows) {
        //         if (saveStat === stat){
        //             saveMod = saveMod + chaProf;
        //         }
        //         return dieTwenty(1) + saveMod;
        //     }
        // }
    }
}


// Test/debugging code.