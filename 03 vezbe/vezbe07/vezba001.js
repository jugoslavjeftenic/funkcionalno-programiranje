function izdvojPoUslovu(listaStudenata, uslov) {
    // let rezultat = [];
    // for (let student of listaStudenata) {
    //     if (uslov(student)) {
    //         rezultat.push(student);
    //     }
    // }
    // return rezultat;

    return listaStudenata.filter((student) => uslov(student));
}

let imePocinjeSa = (tekst) => (student) => student.ime.startsWith(tekst);
let jePunoletan = (punoletstvo = 18) => (student) => student.godine >= punoletstvo;

let listaStudenata = [
    { ime: "Marko", godine: 17 },
    { ime: "Jovana", godine: 19 },
    { ime: "Jelena", godine: 14 },
    { ime: "Ivan", godine: 55 }
];

console.log(izdvojPoUslovu(listaStudenata, imePocinjeSa("Ma")));
console.log(izdvojPoUslovu(listaStudenata, jePunoletan()));

console.log(listaStudenata.reduce((studenti, student) => (imePocinjeSa("Ma")(student) && studenti.push(student), studenti), []));
console.log(listaStudenata.reduce((studenti, student) => (jePunoletan()(student) && studenti.push(student), studenti), []));
