function kaziZdravo() {
    console.log("Zdravo.");
    kaziZdravo.brojac++;
}

console.log(`Tip objekta kaziZdravo: `, typeof (kaziZdravo));
kaziZdravo.brojac = 0;

kaziZdravo();
kaziZdravo();

console.log(`Pozvao ${kaziZdravo.brojac} puta`);
