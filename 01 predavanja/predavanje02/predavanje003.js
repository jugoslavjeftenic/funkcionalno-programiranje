function suma(a, b) {
    return a + b;
}
console.log(suma(1, 2, 3, 4, 5));

function sumaSvih(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumaSvih(1));
console.log(sumaSvih(1, 2, 3, 4, 5));

function prikaziIme(ime, prezime, ...titule) {
    console.log(ime + " " + prezime);
    console.log(titule[0]);
    console.log(titule[1]);
    console.log(titule.length);
}
prikaziIme("Julije", "Cezar", "Konzul", "Imperator");
