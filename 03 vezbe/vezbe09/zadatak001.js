let a = [5, 8, 3, 90, 3];
console.log(a);

console.log(a.reduce((noviNiz, vrednost) => {
    noviNiz.push(vrednost + 100);
    return noviNiz;
}, []));

console.log(a.reduce((noviNiz, vrednost) => {
    if (vrednost % 5 === 0) {
        noviNiz.push(vrednost);
    }
    return noviNiz;
}, []));
