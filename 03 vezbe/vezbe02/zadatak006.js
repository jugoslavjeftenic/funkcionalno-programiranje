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

console.log(unesiBodove());
