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
    raceName: 'half orc',
    darkvision: true,
    bonus2: ['str'],
    bonus1: ['con']
}
const halfElf = {
    raceName: 'half elf',
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
    let chaStats = {
        str: dieSix(3),
        dex: dieSix(3), 
        con: dieSix(3),
        int: dieSix(3),
        wis: dieSix(3),
        cha: dieSix(3)
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
    // THIS CODE DOESN'T WORK AS INTENDED.
    // INTENDED: Adjust stats for racial bonuses. 
    // ACTUAL : No changes.
    const statArray = ['str', 'dex', 'con', 'int', 'wis', 'cha']
    for (i = 0; i < Object.keys(chaStats).length; i++){
        for (j = 0; j < Object.keys(chaRace.bonus2).length; j++) {
            // console.log(chaRace.bonus2[j]);
            // console.log(statArray[i]);
            // console.log(Object.values(chaStats)[i])
            if (chaRace.bonus2[j] === statArray[i]) {
                console.log('stat being modified:' + Object.keys(chaStats)[i])
                console.log('score before modification:' + Object.values(chaStats)[i])
                let moddedStat = chaStats[i]
                moddedStat += 2;
                console.log('stat being modified:' + Object.keys(chaStats)[i])
                console.log('score after modification:' + Object.values(chaStats)[i])
            }
        }
        for (k = 0; k < Object.keys(chaRace.bonus1).length; k++) {    
            if (chaRace.bonus1[k] === statArray[i]) {
                console.log('stat being modified:' + Object.keys(chaStats)[i])
                console.log('score before modification:' + Object.values(chaStats)[i])
                let moddedStat = chaStats[i]
                moddedStat ++
                console.log('stat being modified:' + Object.keys(chaStats)[i])
                console.log('score after modification:' + Object.values(chaStats)[i])
            }
        }
    }
    

    //Calculate starting hit points.
    let startHitPoints = chaClass.hitDie
    
    
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
        _hp: startHitPoints
    }
}


// Test/debugging code.
 console.log(makeCharacter('Trevor', 1, 'Fighter', 'half orc', 'Soldier'))