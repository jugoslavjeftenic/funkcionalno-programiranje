function proveriPodatke() {
    const korisnickoIme = "Mirko";
    const lozinka = "meTak";

    return function daLiSuValidni(ime, loz) {
        if (korisnickoIme === ime && lozinka === loz) {
            console.log("Uspesan login.");
        }
        else {
            console.log("Neuspesan login.");
        }
    };
}

proveriPodatke()("Slavko", "meTak");
proveriPodatke()("Mirko", "meTak");
