let korisnik = {
    ime: "Petar",
    godine: 30,
    jeAdmin: true
};

for (let key in korisnik) {
    console.log(key);
    console.log(korisnik[key]);
}
