function box(v) {
    return {
        value: v,
        map: function (predicate) {
            let vrednost = predicate(this.value);
            return box(vrednost);
        }
    };
}

let mojaKutija = box(5);
console.log(mojaKutija);

let novaKutija = mojaKutija.map(n => n * 2);
console.log(novaKutija);
