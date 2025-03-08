let label = document.createElement('label');

let suma = 0;
let n = 100;

for (; n < 1000; n++) {
    suma += n;
}

label.textContent = suma;
document.body.appendChild(label);
