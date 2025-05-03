function zip(arr1, arr2) {
    var zipped = [];
    arr1 = [...arr1];
    arr2 = [...arr2];

    while (arr1.length > 0 && arr2.length > 0) {
        zipped.push([arr1.shift(), arr2.shift()]);
    }

    return zipped;
}

console.log(zip([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
