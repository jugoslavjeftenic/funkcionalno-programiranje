const o = { a: 1 };

Object.defineProperty(o, 'b', { get: function () { return this.a + 1; } });

console.log(o.b);
