function sumImperativno(total, ...nums) {
    for (let num of nums) {
        total += num;
    }
    return total;
}

function sumDeklarativno(num1, ...nums) {
    if (nums.length == 0) {
        return num1;
    }
    return num1 + sumDeklarativno(...nums);
}

console.log(sumImperativno(0, 1, 2, 3));
console.log(sumDeklarativno(0, 1, 2, 3));
