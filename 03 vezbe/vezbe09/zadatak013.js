let niz = [8, 3, 1, 0];
let broj = 6;

// function dodajBroj() {
//     niz.push(broj);
//     console.log(niz);
// }

function dodajBroj(niz, broj) {
    return [...niz, broj];
    // return JSON.parse(JSON.stringify(niz))
}

console.log(niz);
console.log(dodajBroj(niz, broj));
