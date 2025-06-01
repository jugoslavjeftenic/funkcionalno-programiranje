const programeri = [
    {
        ime: "Marko",
        prezime: "Marković",
        senioritet: "junior",
        pozicija: "frontend developer",
        plata: 800
    },
    {
        ime: "Jovana",
        prezime: "Janković",
        senioritet: "senior",
        pozicija: "backend developer",
        plata: 2500
    },
    {
        ime: "Nikola",
        prezime: "Nikolić",
        senioritet: "medior",
        pozicija: "full stack developer",
        plata: 1800
    },
    {
        ime: "Ana",
        prezime: "Anić",
        senioritet: "senior",
        pozicija: "DevOps engineer",
        plata: 2700
    },
    {
        ime: "Petar",
        prezime: "Petrović",
        senioritet: "junior",
        pozicija: "frontend developer",
        plata: 900
    },
    {
        ime: "Milica",
        prezime: "Milić",
        senioritet: "medior",
        pozicija: "mobile developer",
        plata: 1600
    }
];

console.log(programeri
    .reduce((sum, programer) => {
        return programer.senioritet === "senior" ? sum += programer.plata : sum;
    }, 0)
);

console.log(programeri
    .reduce((junioriNaFrontendu, programer) => {
        if (programer.senioritet === "junior" && programer.pozicija === "frontend developer") {
            junioriNaFrontendu.push(`${programer.ime} ${programer.prezime}`);
        }
        return junioriNaFrontendu;
    }, [])
);

console.log(programeri
    .filter((programer) => programer.senioritet === "medior" && programer.plata < 1500)
    .length
);

console.log(programeri.map((programer) => {
    return {
        ...programer,
        plata: programer.plata * 117
    };
}));
