const ecran = document.getElementById('ecran');
const effacer = document.getElementById('effacer');
const clear = document.getElementById('clear');
const egal = document.getElementById('egal');

const touches = ["(", ")", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", ".", "0"];

document.addEventListener('click', (e) => {
    const value = e.target.getAttribute("aria-valuenow");
    
    //les nombres qu'on écrit s'écrivent sur l'écran
    if(touches.includes(value)) {
        ecran.textContent += value;
    }

    switch (value) {
        case value == "clear":
            ecran.textContent = "";
            break;

        case value == "egal":
            const resultat = eval(ecran.textContent);
            ecran.textContent = resultat;
            break;

        default:
            break;
    }
})