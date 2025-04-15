let vozilo = {
    vozi() { console.log("brm brm!!"); }
};

let toyota = Object.create(vozilo);
toyota.marka = "Toyota";
toyota.drzavaPorekla = "Japan";

let corolla = Object.create(toyota);
corolla.oblik = "izduzen";

console.log(toyota.marka, "ima svojstvo \"marka\": ", toyota.hasOwnProperty("marka"));
console.log(toyota.marka, "ima svojstvo \"drzavaPorekla\": ", toyota.hasOwnProperty("drzavaPorekla"));
console.log(toyota.marka, "ima svojstvo \"oblik\": ", toyota.hasOwnProperty("oblik"));

console.log(corolla.marka, "ima svojstvo \"marka\": ", corolla.hasOwnProperty("marka"));
console.log(corolla.marka, "ima svojstvo \"drzavaPorekla\": ", corolla.hasOwnProperty("drzavaPorekla"));
console.log(corolla.marka, "ima svojstvo \"oblik\": ", corolla.hasOwnProperty("oblik"));

console.log("\"vozilo\" je prototip objekta \"toyota\":", vozilo.isPrototypeOf(toyota));
console.log("\"vozilo\" je prototip objekta \"corolla\":", vozilo.isPrototypeOf(corolla));
console.log("\"toyota\" je prototip objekta \"corolla\":", toyota.isPrototypeOf(corolla));
console.log("\"corolla\" je prototip objekta \"vozilo\":", corolla.isPrototypeOf(vozilo));
console.log("\"corolla\" je prototip objekta \"toyota\":", corolla.isPrototypeOf(toyota));

corolla.vozi = () => console.log("Corolla brm brm!!");
corolla.vozi();

Object.getPrototypeOf(Object.getPrototypeOf(corolla)).vozi = () => console.log("Korolin brm brm u vozilu");
vozilo.vozi();

console.log(Object.getPrototypeOf(corolla));
console.log(Object.getPrototypeOf(toyota));
