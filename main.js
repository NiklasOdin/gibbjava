
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (form.name.value === '' || form.name.value == null){
        messages.push('Namn är obligatoriskt')
    }

    if (messages.length > 0) {
        
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})
let pos = 0;
function rollDiceMove() {
    const elold = document.getElementById('pos' + (pos + 1)); 
    elold.innerHTML = ''
    const steps = Math.trunc(Math.random() * 6) + 1;
    pos = (pos + steps)%28;
    const el = document.getElementById('pos' + (pos + 1));
    if (el) {
        el.innerHTML = '<p>hej</p>';
    }
    const diceRoll = document.getElementById('diceRoll');
    diceRoll.innerHTML = String('You rolled: ' + steps);
}

