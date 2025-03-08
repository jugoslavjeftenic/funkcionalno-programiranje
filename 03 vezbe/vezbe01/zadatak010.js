let label = document.createElement('label');

let pol = "muski";
let pritisak = 100;

let poruka = ((pol == "zenski" && pritisak >= 90 && pritisak <= 120) ||
    (pol == "muski" && pritisak >= 100 && pritisak <= 130))
    ? "je" : "nije";

label.textContent = "Krvni pritisak " + poruka + " normalan.";
document.body.appendChild(label);
