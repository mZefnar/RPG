function generateNewCharSheet(newChar) {
    let userInFname = document.getElementById('fname').value
    let userInLevel = document.querySelector('input[name="inputLevel"]').value;
    let userInClass = document.querySelector('input[name="class"]:checked').value;
    let userInRace = document.querySelector('input[name="race"]:checked').value;
    let userInBg = document.getElementById('inputBg').value

    newChar = makeCharacter(userInFname, userInLevel, userInClass, userInRace, userInBg)

    let sheetCharName = document.createElement('p')
    sheetCharName.innerText = 'Name: ' + newChar._name;
    document.body.appendChild(sheetCharName);

    let sheetCharClass = document.createElement('p')
    sheetCharClass.innerText = 'Class: ' + newChar._classMain.className;
    document.body.appendChild(sheetCharClass);
    
    let sheetCharLevel = document.createElement('p')
    sheetCharLevel.innerText = 'Level: ' + newChar._chaLevel;
    document.body.appendChild(sheetCharLevel);
    
    let sheetCharRace = document.createElement('p')
    sheetCharRace.innerText = 'Race: ' + newChar._race.raceName;
    document.body.appendChild(sheetCharRace);
    
    let sheetCharBg = document.createElement('p')
    sheetCharBg.innerText = 'Background: ' + newChar._bg;
    document.body.appendChild(sheetCharBg);
    
    let sheetStats = document.createElement('p')
    sheetStats.innerText = 'Str: ' + newChar._stats[0] + ' Dex: ' + newChar._stats[1] + ' Con: ' + newChar._stats[2]  + ' Int: ' + newChar._stats[3] + ' Wis: ' + newChar._stats[4] + ' Cha: ' + newChar._stats[5]
    document.body.appendChild(sheetStats);

    document.getElementById('form-box').style.display = 'none';
    // TODO:const userInRace = document.querySelector('input[name="race"]:checked').value;
    // take input and pass through makeCharacter() funtion
    // generate character sheet from what makeCharacter() returns

} // ending bracket for generateCharSheet()

const button = document.getElementById('generateButton');
button.onclick = generateNewCharSheet