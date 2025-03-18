let obj = {
    a: 1,
    b: {
        c: 2
    }
};

let newObj = Object.assign({}, obj);

console.log(newObj);

obj.a = 10;
console.log(obj);
console.log(newObj);

newObj.a = 20;
console.log(obj);
console.log(newObj);

obj.b.c = 30;
console.log(obj);
console.log(newObj);

newObj.b.c = 40;
console.log(obj);
console.log(newObj);
