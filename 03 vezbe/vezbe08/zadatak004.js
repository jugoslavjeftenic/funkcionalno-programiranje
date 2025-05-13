// Dat je niz objekata:
// let gradovi = [
// {ime: "Tokio", zemlja: "Japan", kontinent: "Azija", brojStanovnika:
// 13960000},
// {ime: "Kejptaun", zemlja: "Juznoafricka Republika", kontinent:
// "Afrika", brojStanovnika: 4618000},
// {ime: "Sidnej", zemlja: "Australija", kontinent: "Australija",
// brojStanovnika: 5312000},
// {ime: "Kairo", zemlja: "Egipat", kontinent: "Afrika", brojStanovnika:
// 9814000}];
// a) Naći sve afričke gradove sa manje od 5 miliona stanovnika
// b) Naći sve države u Aziji
// c) Pronaći grad sa najviše stanovnika
// d) Odrediti koliko ima gradova na kom kontinentu. Povratna vrednost treba da je sledeći
// objekat: {Azija: 1, Afrika: 2, Australija: 1}.
let gradovi = [
    { ime: "Tokio", zemlja: "Japan", kontinent: "Azija", brojStanovnika: 13960000 },
    { ime: "Kejptaun", zemlja: "Juznoafricka Republika", kontinent: "Afrika", brojStanovnika: 4618000 },
    { ime: "Sidnej", zemlja: "Australija", kontinent: "Australija", brojStanovnika: 5312000 },
    { ime: "Kairo", zemlja: "Egipat", kontinent: "Afrika", brojStanovnika: 9814000 }
];

console.log(
    gradovi
        .filter((grad) => grad.kontinent === "Afrika" && grad.brojStanovnika < 5000000)
        .map((grad) => grad.ime)
);
console.log(
    gradovi
        .reduce((imenaGradova, grad) => {
            if (grad.kontinent === "Afrika" && grad.brojStanovnika < 5000000) {
                imenaGradova.push(grad.ime);
            }
            return imenaGradova;
        }, [])
);

console.log(
    gradovi
        .filter((grad) => grad.kontinent === "Azija")
        .map((grad) => grad.zemlja)
);
console.log(
    gradovi
        .reduce((drzave, grad) => {
            if (grad.kontinent === "Azija") {
                drzave.push(grad.zemlja);
            }
            return drzave;
        }, [])
);

console.log(
    gradovi
        .reduce((gradSaNajviseStanovnika, grad) => {
            if (gradSaNajviseStanovnika.brojStanovnika < grad.brojStanovnika) {
                gradSaNajviseStanovnika = grad;
            }
            return gradSaNajviseStanovnika;
        }, gradovi[0]).ime
);

console.log(
    gradovi
        .reduce((tabelaGradova, grad) => {
            tabelaGradova[grad.kontinent] = (tabelaGradova[grad.kontinent] || 0) + 1;
            return tabelaGradova;
        }, {})
);
