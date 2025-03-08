let label = document.createElement('label');

let deljenik = 7168;
let brojac = 0;

while (true) {
    if (deljenik >= 2 && deljenik % 2 === 0) {
        deljenik /= 2;
        brojac++;
    } else {
        break;
    }
}

label.textContent = brojac;
document.body.appendChild(label);
