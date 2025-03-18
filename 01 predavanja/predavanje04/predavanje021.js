function Osoba(ime) {
    this.ime = ime;
};

Osoba.prototype.opisi = function () {
    return "Osoba zvana " + this.ime;
};

function Zaposleni(ime, titula) {
    Osoba.call(this, ime);
    this.titula = titula;
};
Zaposleni.prototype = Object.create(Osoba.prototype);
Zaposleni.prototype.constructor = Zaposleni;
Zaposleni.prototype.opisi = function () {
    return Osoba.prototype.opisi.call(this) + ' (' + this.titula + ')';
};

var pera = new Zaposleni("Pera", "Lozac");
console.log(pera.opisi());
console.log(pera instanceof Zaposleni);
console.log(pera instanceof Osoba);
