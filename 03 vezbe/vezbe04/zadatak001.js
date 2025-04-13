var auto = {
    brojTockova: 4,
    brojSedista: 5
};

var kamion = {
    brojTockova: 4,
    brojSedista: 2
};

var motor = {
    brojTockova: 2,
    brojSedista: 1
};

function predstaviSe() {
    console.log("Imam ", this.brojSedista, " sedista i ", this.brojTockova, " tocka.");
}

predstaviSe.call(auto);
predstaviSe.call(kamion);
predstaviSe.call(motor);
