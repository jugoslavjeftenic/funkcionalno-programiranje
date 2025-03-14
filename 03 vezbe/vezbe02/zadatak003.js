function izracunajProsek(...ocene) {
    const brojOcena = ocene.length;
    let sumaOcena = 0;

    for (let i = 0; i < ocene.length; i++) {
        sumaOcena += ocene[i];
    }

    return sumaOcena / brojOcena;
}

console.log(izracunajProsek(6, 8));
console.log(izracunajProsek(6, 8, 10, 10));
