function maxParanImperativno(...brojevi) {
    let maxBroj = -Infinity;
    for (let broj of brojevi) {
        if (broj % 2 === 0 && broj > maxBroj) {
            maxBroj = broj;
        }
    }
    if (maxBroj !== -Infinity) {
        return maxBroj;
    }
}

function maxParanRekurzivno(broj1, ...ostaliBrojevi) {
    let maxOstali = ostaliBrojevi.length > 0 ? maxParanRekurzivno(...ostaliBrojevi) : undefined;
    return (broj1 % 2 !== 0 || broj1 < maxOstali) ? maxOstali : broj1;
}

console.log(maxParanImperativno(1, 10, 3, 2));
console.log(maxParanRekurzivno(1, 10, 3, 2));
