var double = v => v * 2;
let inList = [1, 2, 3, 4, 5];

console.log(inList);
console.log(inList.map(double));

console.log(inList);
console.log(inList.reduce((list, v) => (list.push(double(v)), list), []));
