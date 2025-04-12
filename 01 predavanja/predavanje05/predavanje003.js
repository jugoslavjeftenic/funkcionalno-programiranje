function kaziZdravo() {
    console.log("Zdravo.");
    kaziZdravo.brojac++;
}

let brojac = 0;
console.log(`brojac = `, brojac);
console.log(`kaziZdravo.brojac = `, kaziZdravo.brojac);

kaziZdravo();
kaziZdravo();

console.log(`Pozvao ${kaziZdravo.brojac} puta.`);
