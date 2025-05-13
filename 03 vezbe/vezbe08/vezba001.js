let a = [5, 8, 3, 90, 3];
console.log(a);

console.log(a.reduce((uvecaniNiz, element) => {
    uvecaniNiz.push(100 + element);
    return uvecaniNiz;
}, []));

let b = a.reduce((noviNiz, element) => {
    if (element % 5 === 0) {
        noviNiz.push(element);
    }
    return noviNiz;
}, []);
console.log(b);

function myMap(array, callback) {
    const retVal = [];
    for (let i = 0; i < array.length; i++) {
        retVal.push(callback(array[i], i, array));
    }
    return retVal;
}
console.log(myMap(a, (broj) => broj + 100));

function myFilter(array, callback) {
    const retVal = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            retVal.push(array[i]);
        }
    }
    return retVal;
}
console.log(myFilter(a, (broj) => broj > 5));
