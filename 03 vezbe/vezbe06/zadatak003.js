function sracunajUkupanPrihod(prihod, bonus, procenatPoreza) {
    console.log((prihod + bonus) * (100 - procenatPoreza) / 100);
}
sracunajUkupanPrihod(10000, 1000, 5);

function sracunajUkupanPrihodKurirano(prihod) {
    return function (bonus) {
        return function (procenatPoreza) {
            console.log((prihod + bonus) * (100 - procenatPoreza) / 100);
        };
    };
}
sracunajUkupanPrihodKurirano(10000)(1000)(5);
