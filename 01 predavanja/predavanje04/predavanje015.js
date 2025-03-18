var PersonProto = {
    describe: function () {
        return "Person named " + this.name;
    }
};

var persa = Object.create(PersonProto, {
    name: { value: 'Persa', writable: true }
});

console.log(PersonProto.describe());
console.log(persa.describe());
