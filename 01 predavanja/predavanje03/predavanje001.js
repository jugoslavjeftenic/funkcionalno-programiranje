var x = 10;
function foo(a) {
    var b = 20;
    console.log("x=" + x + " a=" + a + " b=" + b);

    function bar(c) {
        var d = 30;
        console.log("c=" + c + " d=" + d);

        return boop(x + a + b + c + d);
    }

    function boop(e) {
        console.log("e=" + e);
        return e * -1;
    }

    return bar;
}

var moar = foo(5);
console.log(moar(0));
