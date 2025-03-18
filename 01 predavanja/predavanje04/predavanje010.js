let obj = {
    a: 1,
    b: 2
};

let objCopy = Object.assign({}, obj);

alert(obj.a + obj.b);
alert(`a:${obj.a}, b:${obj.b}`);

objCopy.b = 89;
alert(`a:${objCopy.a}, b:${objCopy.b}`);

obj.b = 6;
alert(`a:${obj.a}, b:${obj.b}`);
