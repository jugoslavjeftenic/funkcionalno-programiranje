const reci = ["jabuka", "burek", "automobil", "banana", "kruška", "avion"];
console.log(reci
    .filter((rec) => rec.startsWith('a'))
    .reduce((ukupnaDuzina, rec) => ukupnaDuzina += rec.length, 0)
);
