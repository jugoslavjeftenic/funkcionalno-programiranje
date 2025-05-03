let imena = ["Mara", "Boba", "Mika", "Mile", "Mara", "Mara", "Vera", "Vera"];

let izbrojanaImena = imena.reduce(function (svaImena, ime) {
    if (ime in svaImena) {
        svaImena[ime]++;
    }
    else {
        svaImena[ime] = 1;
    }

    // svaImena[ime] = (svaImena[ime] || 0) + 1;

    return svaImena;
}, {});

console.log(izbrojanaImena);
