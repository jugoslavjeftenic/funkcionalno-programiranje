let pol = "muski";
let pritisak = 100;

let daLiJePritisakNormalan = ((pol == "zenski" && pritisak >= 90 && pritisak <= 120) ||
    (pol == "muski" && pritisak >= 100 && pritisak <= 130))
    ? true : false;

console.log("Krvni pritisak " + (daLiJePritisakNormalan ? "je" : "nije") + " normalan.");
