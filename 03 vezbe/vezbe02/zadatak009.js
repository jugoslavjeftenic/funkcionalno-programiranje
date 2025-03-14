function nadjiNajmanjiPozitivan(...listaBrojeva) {
    let najmanjiPozitivanBroj = listaBrojeva[0];

    for (let i = 1; i < listaBrojeva.length; i++) {
        if (listaBrojeva[i] > 0 && listaBrojeva[i] < najmanjiPozitivanBroj) {
            najmanjiPozitivanBroj = listaBrojeva[i];
        }
        else if (listaBrojeva[i] > 0 && najmanjiPozitivanBroj < 1) {
            najmanjiPozitivanBroj = listaBrojeva[i];
        }
    }

    if (najmanjiPozitivanBroj < 1) {
        return "Nema pozitivnog broja.";
    }
    return najmanjiPozitivanBroj;
}

console.log(nadjiNajmanjiPozitivan(10, 5, -7));
console.log(nadjiNajmanjiPozitivan(0, -3, 2, -7));
console.log(nadjiNajmanjiPozitivan(0, -3, -2, -7));
