function isBigEnough(value) {
    return value >= 10;
}

let inArray = [12, 5, 8, 130, 44];
console.log("Ulazni niz: " + inArray);

let filtered = inArray.filter(isBigEnough);
console.log("Propusteni veci od 10: " + filtered);
