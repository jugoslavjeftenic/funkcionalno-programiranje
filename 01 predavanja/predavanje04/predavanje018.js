var PersonProto = {
    describe: function () {
        return "Person named " + this.name;
    }
};

var jane = Object.create(PersonProto, {
    name: { value: 'Jane', writable: true }
});

var tarzan = Object.create(PersonProto, {
    name: { value: 'Tarzan', writable: true }
});

console.log(jane.describe());
console.log(tarzan.describe());
