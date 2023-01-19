const chatLog = document.getElementById('chat-log')


function newPost(content) {
    const newPost = document.createElement('li');
    const newPostContents = document.createTextNode(content);
    newPost.appendChild(newPostContents);
    chatLog.appendChild(newPost);


}

function meleeAttack() {
    newPost('${Name} attacks up close for ${toHit} to hit and ${damage} damage!');
}
const meleeAttackButton = document.getElementById('matkbutton');
meleeAttackButton.onclick = meleeAttack;

function rangedAttack() {
    newPost('${Name} attacks from afar for ${toHit} to hit and ${damage} damage!')
}
const rangedAttackButton = document.getElementById('ratkbutton');
rangedAttackButton.onclick = rangedAttack;

function lightningBolt() {
    newPost('${Name} casts Lightning Bolt for ${damage} damage!');
}
const castLightningButton = document.getElementById('lightningbutton');
castLightningButton.onclick = lightningBolt;

function fireball() {
    newPost('${Name} casts Fireball for ${damage} damage!');
}
const castFireballButton = document.getElementById('fireballbutton');
castFireballButton.onclick =  fireball;

function summonHelp() {
    newPost('${Name} summons a goblin for help!');
    newPost('The goblin gnashes its teeth and makes menacing noises!');
}
const castSummonButton = document.getElementById('summonbutton');
castSummonButton.onclick = summonHelp;

function flee() {
    newPost('You coward! ${Name} suffers ${damage} as they are struck in the back!');
}
const fleeButton = document.getElementById('fleebutton');
fleeButton.onclick = flee;

function drinkPotion() {
    newPost('${Name} quaffs a bubbly potion and feels rejuvenated.');
}
const potionButton = document.getElementById('potionbutton');
potionButton.onclick = drinkPotion;

function zapWand() {
    newPost('${Name} zaps a hickory wand and a beam of disintegration nearly hits them in the face!')
}
const wandButton = document.getElementById('wandbutton');
wandButton.onclick = zapWand;

function clearLog() {
    chatLog.innerHTML = null;
}
const resetButton = document.getElementById('resetbutton');
resetButton.onclick = clearLog;