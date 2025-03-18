var date1 = new Date();
var date2 = new Date("1962-11-11");

var razlika_u_ms = date1 - date2;
var razlika_dan = razlika_u_ms / (1000 * 60 * 60 * 24);

console.log(date1);
console.log(date2);
console.log(razlika_u_ms);
console.log(razlika_dan.toFixed(0));
