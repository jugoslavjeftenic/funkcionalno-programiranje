function rezervisiSediste(putnik) {
    return function (vrsta, broj) {
        console.log(`${putnik} rezervise sediste ${vrsta}${broj}`);
    };
}
rezervisiSediste("Djura")("C", 1);

let rezervisiZaPeru = rezervisiSediste("Pera");
rezervisiZaPeru("A", 5);
rezervisiZaPeru("B", 3);
