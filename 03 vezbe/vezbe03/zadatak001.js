function izracunajProsek(...nizOcena) {
    if (nizOcena.length === 0) return 0;
    return nizOcena.reduce((sum, val) => sum + val, 0) / nizOcena.length;
}

// console.log(izracunajProsek(6, 8));
// console.log(izracunajProsek(6, 8, 10, 10));

function sracunajOcenu(brojBodova) {
    switch (true) {
        case brojBodova > 90: return 10;
        case brojBodova > 80: return 9;
        case brojBodova > 70: return 8;
        case brojBodova > 60: return 7;
        case brojBodova > 50: return 6;
        default: return 5;
    }
}

// console.log(sracunajOcenu(92));
// console.log(sracunajOcenu(50));

function sracunajOcene(nizBodova) {
    return nizBodova
        .filter(bodovi => bodovi > 50)
        .map(bodovi => sracunajOcenu(bodovi));
}

// let mojeOcene = [92, 50, 102, 65, 30, 51];
// console.log(mojeOcene);
// console.log(sracunajOcene(mojeOcene));

function unesiBodove() {
    let nizBodova = [];

    while (true) {
        let bodovi = +prompt("Unesite broj bodova");
        if (Number.isNaN(bodovi) || bodovi <= 0) return nizBodova;

        nizBodova.push(bodovi);
    }
}

// console.log(unesiBodove());

function sveZajedno() {
    let nizBodova = unesiBodove();
    let nizOcena = sracunajOcene(nizBodova);
    return izracunajProsek(...nizOcena);
}

console.log(sveZajedno());
