function generateCharSheet() {
    const userInFname = document.getElementById('fname').value
    const userInLname = document.getElementById('lname').value
    const userInBg = document.getElementById('inputBg').value
    const userInLevel = document.getElementById('inputLevel').value
    const userInRace = document.getElementById('inputRace').value
    const userInClass = document.getElementById('inputClass').value

    const sheetCharName = document.createElement('p')
    sheetCharName.innerText = 'Name: ' + userInFname + ' ' + userInLname;
    document.body.appendChild(sheetCharName);

    const sheetCharClass = document.createElement('p')
    sheetCharClass.innerText = 'Class: ' + userInClass;
    document.body.appendChild(sheetCharClass);
    
    const sheetCharLevel = document.createElement('p')
    sheetCharLevel.innerText = 'Level: ' + userInLevel;
    document.body.appendChild(sheetCharLevel);
    
    const sheetCharRace = document.createElement('p')
    sheetCharRace.innerText = 'Race: ' + userInRace;
    document.body.appendChild(sheetCharRace);
    
    const sheetCharBg = document.createElement('p')
    sheetCharBg.innerText = 'Background: ' + userInBg;
    document.body.appendChild(sheetCharBg);
    
    // TODO:
    // take input and pass through makeCharacter() funtion
    // generate character sheet from what makeCharacter() returns

} // ending bracket for generateCharSheet()