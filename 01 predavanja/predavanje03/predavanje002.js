function numberGenerator() {
    var num = 1;

    function checkNumber() {
        alert(num);
    }

    num++;
    return checkNumber;
}

var number = numberGenerator();
number();
