const samoglasnici = ['a', 'e', 'i', 'o', 'u'];
let tekst = "AJa sam tekst";
// let tekst = "J sm tkst";

spoljasnaPetlja:
for (let i = 0; i < tekst.length; i++) {
    for (let j = 0; j < samoglasnici.length; j++) {
        if (tekst[i].toLowerCase() == samoglasnici[j]) {
            console.log("Tekst ima samoglasnik.");
            break spoljasnaPetlja;
        }
    }
}
