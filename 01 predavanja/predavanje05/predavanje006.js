const module = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = module.getX;
console.log("poziv unbound: " + unboundGetX());

const boundGetX = unboundGetX.bind(module);
console.log("poziv bound: " + boundGetX());
