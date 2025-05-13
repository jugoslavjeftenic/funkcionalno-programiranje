Array.prototype.findLast = function (predicate) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (predicate(this[i], i, this)) {
            return this[i];
        }
    }
    return -1;
};

let niz = [5, 8, 3, 90, 3, 1];
console.log(niz.findLast((n) => n === 3));
