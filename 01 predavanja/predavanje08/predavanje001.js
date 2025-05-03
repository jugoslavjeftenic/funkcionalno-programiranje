const mapSimple = (array, fn) => {
    let result = [];

    for (const value of array) {
        result.push(fn(value));
    }

    return result;
};

let inList = [1, 2, 3];
console.log("Ulazna lista pre poziva map: " + inList);

let outList = mapSimple(inList, (x) => x + 2);
console.log("Izlazna lista nakon map: " + outList);
console.log("Ulazna lista nakon poziva map: " + inList);
