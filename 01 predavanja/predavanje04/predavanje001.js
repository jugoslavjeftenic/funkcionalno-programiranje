var myObject = { a: 2, b: 33 };
var idx;

let wantA = prompt("Zelite li svojstvo a?", true);
if (wantA) {
    idx = "a";
}
else {
    idx = "b";
}

console.log(idx);
console.log(myObject[idx]);
