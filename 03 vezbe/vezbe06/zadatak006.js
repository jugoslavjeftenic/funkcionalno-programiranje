function vratiParne(niz) {
    let retVal = [];
    for (broj of niz) { if (broj % 2 === 0) { retVal.push(broj); } }
    return retVal;
}

function podeliSa2(niz) {
    let retVal = [];
    for (broj of niz) { retVal.push(broj / 2); }
    return retVal;
}

function vratiSumu(niz) {
    let retVal = 0;
    for (broj of niz) { retVal += broj; }
    return retVal;
}

function kompozitniPoziv(fn1, fn2, fn3) {
    return (niz) => { return fn3(fn2(fn1(niz))); };
}

console.log(kompozitniPoziv(vratiParne, podeliSa2, vratiSumu)([2, 5, 10, 3]));
