function maybe(v) {
    return {
        value: v,

        isNothing: function () { return v === null || v === undefined; },
        map: function (fn) { return this.isNothing() ? maybe(null) : maybe(fn(this.value)); },
        getOrElse: function (defaultValue) { return this.isNothing() ? defaultValue : this.value; }
    };
}

let a = maybe(5)
    .map(x => x + 2)
    .map(x => x * 3);
console.log(a.getOrElse(0));

let b = maybe(null)
    .map(x => x + 2)
    .map(x => x * 3);
console.log(b.getOrElse(0));
