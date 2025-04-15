var tekst = "Da bi se komponovale dve funkcije, treba proslediti \ izlaz poziva prve funkcije \ na ulaz pozivu druge funkcije.";

let napravljeneReci = tekst
    .toLowerCase()
    .split(/\s|\b/);
console.log(napravljeneReci);

var duzeReci = [];
let minimalnaDuzinaReci = prompt("Unesite minimalnu duzinu reci:");

for (let rec of napravljeneReci) {
    if (rec.length > minimalnaDuzinaReci) {
        duzeReci.push(rec);
    }
}
console.log(duzeReci);

var jedinstvenaLista = [];
for (let rec of duzeReci) {
    if (jedinstvenaLista.indexOf(rec) === -1) {
        jedinstvenaLista.push(rec);
    }
}
console.log(jedinstvenaLista);
