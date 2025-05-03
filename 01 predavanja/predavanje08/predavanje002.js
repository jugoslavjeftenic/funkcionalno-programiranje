function map(maperskaFn, ulazniNiz) {
    var novaLista = [];

    for (let [indeks, vrednost] of ulazniNiz.entries()) {
        novaLista.push(maperskaFn(vrednost, indeks, ulazniNiz));
    }

    return novaLista;
}

console.log(map((x) => { return 2 * x; }, [1, 2, 3]));
