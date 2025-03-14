console.log("Kanonicka deklaracija:");
function prebrojDelioceKanonicki(n) {
    let brojac = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            brojac++;
        }
    }

    return brojac;
}

console.log(prebrojDelioceKanonicki(2));  // 2  (1, 2)
console.log(prebrojDelioceKanonicki(3));  // 2  (1, 3)
console.log(prebrojDelioceKanonicki(4));  // 3  (1, 2, 4)
console.log(prebrojDelioceKanonicki(5));  // 2  (1, 5)
console.log(prebrojDelioceKanonicki(15)); // 4  (1, 3, 5, 15)
console.log(prebrojDelioceKanonicki(50)); // 6  (1, 2, 5, 10, 25, 50)

console.log("Anonimni funkcijski izraz:");
let prebrojDelioceAFI = function (n) {
    let brojac = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            brojac++;
        }
    }

    return brojac;
};

console.log(prebrojDelioceAFI(2));  // 2  (1, 2)
console.log(prebrojDelioceAFI(3));  // 2  (1, 3)
console.log(prebrojDelioceAFI(4));  // 3  (1, 2, 4)
console.log(prebrojDelioceAFI(5));  // 2  (1, 5)
console.log(prebrojDelioceAFI(15)); // 4  (1, 3, 5, 15)
console.log(prebrojDelioceAFI(50)); // 6  (1, 2, 5, 10, 25, 50)

console.log("Imenovani funkcijski izraz:");
let prebrojDelioceIFI = function prebrojDelioce(n) {
    let brojac = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            brojac++;
        }
    }

    return brojac;
};

console.log(prebrojDelioceIFI(2));  // 2  (1, 2)
console.log(prebrojDelioceIFI(3));  // 2  (1, 3)
console.log(prebrojDelioceIFI(4));  // 3  (1, 2, 4)
console.log(prebrojDelioceIFI(5));  // 2  (1, 5)
console.log(prebrojDelioceIFI(15)); // 4  (1, 3, 5, 15)
console.log(prebrojDelioceIFI(50)); // 6  (1, 2, 5, 10, 25, 50)
