function je_paran(n) {
    if (n == 0) return true;
    else return je_neparan(n - 1);
}

function je_neparan(n) {
    if (n == 0) return false;
    else return je_paran(n - 1);
}

console.log(je_paran(5));
console.log(je_paran(4));
