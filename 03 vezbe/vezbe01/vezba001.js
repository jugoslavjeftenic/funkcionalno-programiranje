const godinePutnika = 76;

let cenaKarte = 300;

if (godinePutnika < 18 || godinePutnika > 70) {
    cenaKarte /= 2;
    alert("Cena karte sa popustom je " + cenaKarte);
}
