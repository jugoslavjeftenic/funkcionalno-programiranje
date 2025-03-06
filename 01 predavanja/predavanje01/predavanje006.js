let sum = 0;
while (true) {
    let value = +prompt("Unesite broj", "");
    if (!value) break;
    sum += value;
}
alert("Sum: " + sum);
