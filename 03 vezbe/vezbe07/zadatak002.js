let proizvodi = [
    { naziv: "mleko", cena: 120, kolicina: 4 },
    { naziv: "hleb", cena: 90, kolicina: 5 },
    { naziv: "jaje", cena: 11, kolicina: 80 },
    { naziv: "kafa", cena: 500, kolicina: 10 }
];

console.log(proizvodi.map((vrstaProizvoda) => vrstaProizvoda.naziv));
console.log(proizvodi.reduce((ukupnoArtikala, vrstaProizvoda) => ukupnoArtikala += vrstaProizvoda.kolicina, 0));
console.log(proizvodi.reduce((ukupnaVrednost, vrstaProizvoda) => ukupnaVrednost += vrstaProizvoda.cena * vrstaProizvoda.kolicina, 0));
console.log(proizvodi.filter((vrstaProizvoda) => vrstaProizvoda.kolicina < 10));
console.log(proizvodi
    .filter((vrstaProizvoda) => vrstaProizvoda.cena > 100)
    .reduce((ukupnoArtikala, vrstaProizvoda) => ukupnoArtikala += vrstaProizvoda.kolicina, 0)
);
console.log(proizvodi.filter((vrstaProizvoda) => vrstaProizvoda.cena > 100).length);
