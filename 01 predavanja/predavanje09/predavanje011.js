function summ(array) {
    let result = 0;
    let sz = array.length;
    for (let i = 0; i < sz; i++) {
        result += array[i];
    }
    return result;
}

console.log(summ(Array.from({ length: 10 }, (_, i) => i + 1)));
