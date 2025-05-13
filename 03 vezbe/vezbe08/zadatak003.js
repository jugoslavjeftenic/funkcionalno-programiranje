function komponuj(...fns) {
    return function (input) {
        return fns.reduceRight((acc, fn) => fn(acc), input);
    };
}

let korenuj = (n) => Math.sqrt(n);
let povecajZa10 = (n) => n + 10;
let prepolovi = (n) => n / 2;

console.log(komponuj(korenuj, prepolovi, povecajZa10)(40));
console.log(komponuj(povecajZa10, prepolovi)(8));
