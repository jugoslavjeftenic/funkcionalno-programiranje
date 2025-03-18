function Person(name) {
    this.name = name;
};

Person.prototype.describe = function () {
    return "Person named " + this.name;
};

var jane = new Person("Jane");
console.log(jane.describe());
