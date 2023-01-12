// DOM
const container = document.getElementById('container');
const diceBox = container.querySelector('#dice');
const dice = diceBox.querySelectorAll('.die');
const rollDisp = container.querySelector('#rolled');

dice.forEach(die => die.addEventListener('click', getDie));

function getDie(e) {
    let die = e.target.getAttribute('id');
    rollDie(die);
}

function rollDie(die) {
    let roll = Math.ceil(Math.random() * die);
    showRoll(die, roll);
}

function showRoll(die, roll) {
    const num = rollDisp.querySelector('#num');
    const dNum = rollDisp.querySelector('#die-num');

    num.textContent = roll;
    dNum.textContent = 'd' + die;
}