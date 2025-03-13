let deljenik = 7168;
let brojac = 0;

while (deljenik >= 2 && deljenik % 2 === 0) {
    deljenik /= 2;
    brojac++;
}

console.log(brojac);
