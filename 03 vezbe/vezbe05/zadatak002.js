const napraviKorisnika = (metode) => Object.assign(Object.create(korisnikPrototype), metode);

let prijava = () => console.log("Prijavljujem se ...");
let odjava = () => console.log("Odjavljujem se ...");
let kupi = () => console.log("Kupujem ...");
let izvestaj = () => console.log("Pravim izvestaj ...");
let sracunajPlatu = () => console.log("Racunam platu ...");

let korisnikPrototype = { prijava, odjava };

let klijent = napraviKorisnika({ kupi });
let menadzer = napraviKorisnika({ izvestaj });
let racunovodja = napraviKorisnika({ sracunajPlatu });

klijent.prijava();
klijent.odjava();

klijent.kupi();
menadzer.izvestaj();
racunovodja.sracunajPlatu();
