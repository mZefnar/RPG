document.getElementById('outputBox').style.display = 'none';

function generateNewCharSheet(newChar) {
    let userInFname = document.getElementById('fname').value
    let userInLevel = document.getElementById('inputLevel').value;
    let userInClass = document.getElementById('inputClass').value;
    let userInRace = document.getElementById('inputRace').value;
    let userInBg = document.getElementById('inputBg').value

    newChar = makeCharacter(userInFname, userInLevel, userInClass, userInRace, userInBg)

    let sheetCharName = document.createElement('p')
    sheetCharName.innerText = 'Name: ' + newChar._name;
    document.body.appendChild(sheetCharName);

    let sheetHP = document.createElement('p')
    sheetHP.innerText = 'HP: ' + newChar._hp;
    document.body.appendChild(sheetHP);

    let sheetCharClass = document.createElement('p')
    sheetCharClass.innerText = 'Class: ' + newChar._classMain.className;
    document.body.appendChild(sheetCharClass);
    
    let sheetCharLevel = document.createElement('p')
    sheetCharLevel.innerText = 'Level: ' + newChar._chaLevel;
    document.body.appendChild(sheetCharLevel);

    let sheetProf = document.createElement('p')
    sheetProf.innerText = 'Proficiency: +' + newChar._prof;
    document.body.appendChild(sheetProf);
    
    let sheetCharRace = document.createElement('p')
    sheetCharRace.innerText = 'Race: ' + newChar._race._raceName;
    document.body.appendChild(sheetCharRace);
    
    let sheetCharBg = document.createElement('p')
    sheetCharBg.innerText = 'Background: ' + newChar._bg;
    document.body.appendChild(sheetCharBg);
    
    let sheetStats = document.createElement('p')
    sheetStats.innerText = 'Str: ' + newChar._stats[0] + ' Dex: ' + newChar._stats[1] + ' Con: ' + newChar._stats[2]  + ' Int: ' + newChar._stats[3] + ' Wis: ' + newChar._stats[4] + ' Cha: ' + newChar._stats[5]
    document.body.appendChild(sheetStats);

    let inventoryTitle = document.createElement('h3')
    inventoryTitle.innerText = 'Inventory: '
    let sheetInv = document.createElement('ul')
    for (i = 0; i < newChar.inv.length; i++) {
        let newInvItem = document.createElement('li')
        newInvItem.innerText = newChar.inv[i];
        sheetInv.appendChild(newInvItem);
    }
    document.body.appendChild(inventoryTitle);
    document.body.appendChild(sheetInv);

    document.getElementById('form-box').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('outputBox').style.display = 'block';
    // TODO:const userInRace = document.querySelector('input[name="race"]:checked').value;
    // take input and pass through makeCharacter() funtion
    // generate character sheet from what makeCharacter() returns

} // ending bracket for generateCharSheet()

const button = document.getElementById('generateButton');
button.onclick = generateNewCharSheet