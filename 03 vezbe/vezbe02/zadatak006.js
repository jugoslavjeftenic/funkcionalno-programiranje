function saberi(...niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    console.log(suma);
}

saberi(4, 5, 6);
saberi(4);
saberi(4, 5, 6, 7, 3, 5);
saberi(4, 5);
