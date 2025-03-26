function nadjiOpseg(ocene = []) {
    if (ocene.length < 1) return 0;

    let najmanji = ocene[0];
    let najveci = ocene[0];

    for (let i = 1; i < ocene.length; i++) {
        if (najmanji > ocene[i]) {
            najmanji = ocene[i];
        }
        if (najveci < ocene[i]) {
            najveci = ocene[i];
        }
    }

    return najveci - najmanji;
}

function nadjiNizNajsiregOpsega(...nizOcena) {
    let najduzi = 0;

    for (let i = 0; i < nizOcena.length; i++) {
        let najsiri = nadjiOpseg(nizOcena[i]);
        if (nadjiOpseg(nizOcena[najduzi]) < najsiri) {
            najduzi = i;
        }
    }

    return nizOcena[najduzi];
}

let izracunajProsjek = (ocene) => {
    let prosek = ocene.reduce((sum, val) => (sum += val), 0) / ocene.length;
    return prosek;
};

function nadjiProsjekNajsiregOpsega() {
    let oceneSaNajsirimOpsegom = nadjiNizNajsiregOpsega([9, 10, 10, 10], [6, 9, 8], [7, 8, 9, 8]);
    console.log(oceneSaNajsirimOpsegom);
    console.log(izracunajProsjek(oceneSaNajsirimOpsegom));
}

nadjiProsjekNajsiregOpsega();
