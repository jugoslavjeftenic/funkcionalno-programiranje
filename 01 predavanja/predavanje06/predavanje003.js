var tekst = "Da bi se komponovale dve funkcije, treba proslediti \ izlaz poziva prve funkcije \ na ulaz pozivu druge funkcije.";

var duzeReci = compose(preskociKraceReci, izbaciDuplikate, napraviReci);
var korisceneReci = duzeReci(tekst);
console.log(korisceneReci);

function preskociKraceReci(words) {
    var filteredWords = [];
    var minWordLength = prompt("Unesite minimalnu duzinu reci:");

    for (let word of words) {
        if (word.length > minWordLength) {
            filteredWords.push(word);
        }
    }

    return filteredWords;
}

function napraviReci(str) {
    return String(str)
        .toLowerCase()
        .split(/\s|\b/)
        .filter(function alpha(v) {
            return /^[\w]+$/.test(v);
        });
}

function izbaciDuplikate(list) {
    var uniqList = [];
    for (let v of list) {
        if (uniqList.indexOf(v) === -1) {
            uniqList.push(v);
        }
    }

    return uniqList;
}

function compose(...fns) {
    return function (input) {
        return fns.reduceRight((acc, fn) => fn(acc), input);
    };
}
