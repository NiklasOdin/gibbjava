
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    validateName();
    e.preventDefault();
})
let pos = 0;

function validateName() {
    let messages = []
    if (form.name.value === '' || form.name.value == null){
        messages.push('Namn är obligatoriskt')
    }

    if (messages.length > 0) {
        
        errorElement.innerText = messages.join(', ');
        return false;
    }
    return true;
}

function rollDiceMove() {
    if (!validateName()) {
        return;
    }
    const elold = document.getElementById('pos' + (pos + 1)); 
    elold.innerHTML = ''
    const steps = Math.trunc(Math.random() * 6) + 1;
    pos = (pos + steps)%28;
    const el = document.getElementById('pos' + (pos + 1));
     
    if (el) {
        el.innerHTML = '<div class="person">' + form.name.value + '<img src="mikael2.JFIF" alt="" width="50px" height="auto"></div>';
    }
    const diceRoll = document.getElementById('diceRoll');
    diceRoll.innerHTML = String('You rolled: ' + steps);
}

