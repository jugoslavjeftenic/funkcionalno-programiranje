function myForEach(array, callbackfn) {
    for (value of array) {
        callbackfn(value);
    }
}

let niz = [5, 8, 3, 90, 3];
niz.forEach((element) => console.log(element));
myForEach(niz, (element) => console.log(element));
