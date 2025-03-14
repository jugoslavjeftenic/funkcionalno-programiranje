function izracunajProsek(listaOcena) {
    let sumaOcena = 0;
    let brojOcena = 0;

    for (let i = 0; i < listaOcena.length; i++) {
        sumaOcena += listaOcena[i];
        brojOcena++;
    }

    let prosecnaOcena = sumaOcena / brojOcena;
    return prosecnaOcena;
}

function sracunajOcenu(brojBodova) {
    if (brojBodova > 90) {
        return 10;
    }
    else if (brojBodova > 80) {
        return 9;
    }
    else if (brojBodova > 70) {
        return 8;
    }
    else if (brojBodova > 60) {
        return 7;
    }
    else if (brojBodova > 50) {
        return 6;
    }
    else {
        return "Nedovoljan";
    }
}

function sracunajOcene(listaBodova) {
    let listaOcena = listaBodova.map(sracunajOcenu);
    return listaOcena;
}

function unesiBodove() {
    let listaBodova = [];

    while (true) {
        let ocena = +prompt("Unesite bodove:");

        if (ocena == NaN || ocena < 1) {
            return listaBodova;
        }

        listaBodova.push(ocena);
    }
}

function sveZajedno() {
    return izracunajProsek(sracunajOcene(unesiBodove()));
}

console.log(sveZajedno());
