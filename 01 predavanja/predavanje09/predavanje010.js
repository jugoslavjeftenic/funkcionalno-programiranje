function trampoline(fn) {
    return function (...args) {
        let result = fn(...args);
        while (typeof result === "function") {
            result = result();
        }
        return result;
    };
}

function sum(num1, num2, ...nums) {
    if (nums.length === 0) return num1;
    return () => sum(num1 + num2, ...nums);
}

const trampolinedSum = trampoline(sum);

let xs = [];
for (let i = 0; i < 20000; i++) {
    xs.push(i);
}

console.log(trampolinedSum(...xs));
