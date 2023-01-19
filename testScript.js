document.getElementById('outputBox').style.display = 'none';

function generateNewCharSheet(newChar) {
    let userInFname = document.getElementById('fname').value
    let userInLevel = document.getElementById('inputLevel').value;
    let userInClass = document.getElementById('inputClass').value;
    let userInRace = document.getElementById('inputRace').value;
    let userInBg = document.getElementById('inputBg').value

    newChar = makeCharacter(userInFname, userInLevel, userInClass, userInRace, userInBg)

    let sheetCharName = document.getElementById('name-box');
    sheetCharName.innerHTML = 'Name: ' + userInFname;

    let sheetHP = document.getElementById('hp-box');
    sheetHP.innerHTML = 'HP: ' + newChar._hp + '/' + newChar._hp;

    let sheetCharClass = document.getElementById('class-box');
    sheetCharClass.innerHTML = 'Class: ' + newChar._classMain.className;
    
    let sheetCharLevel = document.getElementById('level-box');
    sheetCharLevel.innerHTML = 'Level: ' + newChar._chaLevel;

    let sheetProf = document.getElementById('proficiency-box');
    sheetProf.innerHTML = 'Prof: +' + newChar._prof;
    
    let sheetCharRace = document.getElementById('race-box');
    sheetCharRace.innerHTML = newChar._race._raceName;
    
    let sheetCharBg = document.getElementById('background-box');
    sheetCharBg.innerHTML = 'Background: ' + newChar._bg;
    
    let sheetStr = document.getElementById('str');
    sheetStr.innerHTML = 'STR: ' + newChar._stats[0];
    let sheetDex = document.getElementById('dex');
    sheetDex.innerHTML = 'DEX: ' + newChar._stats[1];
    let sheetCon = document.getElementById('con');
    sheetCon.innerHTML = 'CON: ' + newChar._stats[2];
    let sheetInt = document.getElementById('int');
    sheetInt.innerHTML = 'INT: ' + newChar._stats[3];
    let sheetWis = document.getElementById('wis');
    sheetWis.innerHTML = 'WIS: ' + newChar._stats[4];
    let sheetCha = document.getElementById('cha');
    sheetCha.innerHTML = 'CHA: ' + newChar._stats[5];

    // let sheetStats = document.createElement('p')
    // sheetStats.innerText = 'Str: ' + newChar._stats[0] + ' Dex: ' + newChar._stats[1] + ' Con: ' + newChar._stats[2]  + ' Int: ' + newChar._stats[3] + ' Wis: ' + newChar._stats[4] + ' Cha: ' + newChar._stats[5]
    // document.body.appendChild(sheetStats);

    // let inventoryTitle = document.createElement('h3')
    // inventoryTitle.innerText = 'Inventory: '
    let sheetInv = document.getElementById('backpack')
    for (i = 0; i < newChar.inv.length; i++) {
        let newInvItem = document.createElement('li')
        newInvItem.innerText = newChar.inv[i];
        sheetInv.appendChild(newInvItem);
    }
    // document.body.appendChild(inventoryTitle);
    // document.body.appendChild(sheetInv);

    document.getElementById('form-box').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('outputBox').style.display = 'block';
    // TODO:const userInRace = document.querySelector('input[name="race"]:checked').value;
    // take input and pass through makeCharacter() funtion
    // generate character sheet from what makeCharacter() returns

} // ending bracket for generateCharSheet()

const button = document.getElementById('generateButton');
button.onclick = generateNewCharSheet