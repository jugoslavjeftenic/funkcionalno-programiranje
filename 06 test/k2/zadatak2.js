function compose(...fns) {
    return function (arg) {
        return fns.reduceRight((acc, el) => el(acc), arg);
    };
}

let dodajZaglavlje = (header) => {
    return (text) => header + "\n" + text;
};

let dodajKraj = (end) => {
    return (text) => text + "\n" + end;
};

let a = compose(
    dodajZaglavlje("Poštovani profesore,"),
    dodajKraj("Marko Marković"),
    dodajKraj("Srdačan pozdrav,"))("Zanima me kada je kolokvijum.");
console.log(a);
