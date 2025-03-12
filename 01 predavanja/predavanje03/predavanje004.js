function mysteriousCalculator(a, b) {
    var mysteriousVariable = 3;

    return {
        add: function () {
            var result = a + b + mysteriousVariable;
            alert("Zbir je: " + result);
            return toFixedTwoPlaces(result);
        },
        substract: function () {
            var result = a - b - mysteriousVariable;
            alert("Razlika je: " + result);
            return toFixedTwoPlaces(result);
        }
    };
}

function toFixedTwoPlaces(value) {
    return value.toFixed(2);
}

var myCalculator = mysteriousCalculator(10, 2);
myCalculator.add();
myCalculator.substract();
