var proto = { foo: 'a' };
var obj = Object.create(proto);

console.log(obj.foo);
console.log(obj.hasOwnProperty('foo'));

obj.foo = 'b';
console.log(obj.foo);
console.log(obj.hasOwnProperty('foo'));
console.log(proto.foo);
