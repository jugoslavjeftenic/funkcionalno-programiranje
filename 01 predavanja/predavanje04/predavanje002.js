var person = {
    _firstName: "John",
    _lastName: "Doe",
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
};

console.log(person._firstName);
console.log(person._lastName);
console.log(person.fullName);

const obj1 = {
    log: ['a', 'b', 'c'],
    get poslednji() {
        return this.log[this.log.length - 1];
    }
};
console.log(obj1.poslednji);

const obj2 = {
    log: ['a', 'b', 'c'],
    get prvi() {
        return this.log[this.log.length - 3];
    }
};
console.log(obj2.prvi);
