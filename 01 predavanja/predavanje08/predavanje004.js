let map = Array.prototype.map;
console.log(map);

let a = map.call("Hello World", function (x) {
    return x.charCodeAt(0);
});
console.log(a);
