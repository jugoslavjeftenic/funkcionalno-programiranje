function daLiJeSavrsen(n) {
    if (n < 2) return false;

    let delioci = [1];
    for (let m = 2; m < n; m++) {
        if (n % m == 0) {
            delioci.push(m);
        }
    }

    let sumaDelilaca = delioci.reduce((sum, val) => sum + val, 0);

    if (sumaDelilaca === n) {
        return true;
    }

    return false;
}

// console.log("10: ", daLiJeSavrsen(10));
// console.log("28: ", daLiJeSavrsen(28));

function nadjiSveSavrsene(m, n) {
    for (let i = m; i <= n; i++) {
        let savrsenBroj = daLiJeSavrsen(i);
        if (savrsenBroj) console.log(`Broj ${i} je savrsen.`);
    }
}

// let m = 10;
// let n = 28;
// nadjiSveSavrsene(m, n);

function unesiBroj() {
    while (true) {
        let broj = +prompt("Unesite prirodan broj:");

        if (Number.isInteger(broj) && broj > 0) {
            return broj;
        }
    }
}

// console.log(unesiBroj());

let sveZajedno = () => {
    let a = unesiBroj();
    let b = unesiBroj();

    (a > b) ? nadjiSveSavrsene(b, a) : nadjiSveSavrsene(a, b);
};
sveZajedno();
