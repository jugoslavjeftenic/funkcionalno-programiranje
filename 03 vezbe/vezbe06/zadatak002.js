function posaljiPoruku(posiljalac) {
    return function (primalac) {
        return function (naslov) {
            return function (sadrzaj) {
                console.log(`Od: ${posiljalac}, za: ${primalac}, naslov: ${naslov}, sadrzaj: ${sadrzaj}`);
            };
        };
    };
}

posaljiPoruku("HR")("Pera")("13-ta plata")("kod nas ne postoji!");
