function posaljiPoruku(posiljalac, primalac, naslov, sadrzaj) {
    console.log(`Od: ${posiljalac}, za: ${primalac}, naslov: ${naslov}, sadrzaj: ${sadrzaj}`);
}
posaljiPoruku("HR", "Pera", "13-ta plata", "kod nas ne postoji!");

function posaljiPeriPorukuPozdrava() {
    return function (posiljalac) {
        posaljiPoruku(posiljalac, "Pera", "Pozdrav", "Cao");
    };
}
posaljiPeriPorukuPozdrava()("HR");

function posaljiPorukuOdDjure() {
    return function (primalac, naslov, sadrzaj) {
        posaljiPoruku("Djura", primalac, naslov, sadrzaj);
    };
}
posaljiPorukuOdDjure()("Pera", "13-ta plata", "kod nas ne postoji!");
