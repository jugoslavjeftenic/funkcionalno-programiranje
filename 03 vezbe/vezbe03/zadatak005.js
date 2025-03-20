function nadjiNajveci(niz) {
    let max = niz.reduce((a, b) => a > b ? a : b);
    return max;
}

// console.log(nadjiNajveci([3, 7, 2]));

let formirajNiz = function (...nizovi) {
    return nizovi.map(niz => nadjiNajveci(niz));
};

console.log(formirajNiz([3, 7, 2], [9, 5, 6], [-1, -5, -3]));
