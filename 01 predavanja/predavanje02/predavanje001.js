let funcs = [];

for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        let label = document.createElement('label');
        label.textContent = "Ja sam " + "funcs[" + i + "]. Moj rezultat je: " + i;
        document.body.appendChild(label);

        let br = document.createElement('br');
        document.body.appendChild(br);
    };
}

for (let i = 0; i < 3; i++) {
    funcs[i]();
}
