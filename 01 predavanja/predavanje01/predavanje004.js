function test1() {
    let message = {};
    alert(message);
}

message = 123.456;
alert(message);

message = "Bila sam broj, a sada sam string.";
alert(message);

test1();
alert(typeof (message));
