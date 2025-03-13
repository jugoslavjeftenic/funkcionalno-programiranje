// let tekst = "AJa sam tekst";
let tekst = "J sm tkst";
let samoglasnici = ['a', 'e', 'i', 'o', 'u'];

outerloop: for (let i = 0; i < tekst.length; i++) {
    for (let j = 0; j < samoglasnici.length; j++) {
        // if (samoglasnici[j] == tekst[i]) {
        if (samoglasnici[j].toLowerCase() == tekst[i].toLowerCase()) {
            console.log("imagi");
            break outerloop;
        }
    }
}
