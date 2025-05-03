var firstNames = [
    { name: "Jonathan", variations: ["John", "jon", "Jonny"] },
    { name: "Stephanie", variations: ["Steph", "Stephy"] },
    { name: "Frederic", variations: ["Fred", "Freddy"] },
];

console.log(firstNames);
console.log(firstNames.map(entry => [entry.name, ...entry.variations]));
console.log(firstNames.flatMap(entry => [entry.name, ...entry.variations]));
console.log(firstNames.reduce((list, entry) => list.concat(entry.name, ...entry.variations), []));
