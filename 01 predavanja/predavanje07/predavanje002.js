const pocinjeSaS = reci => {
    const filtrirano = [];

    for (let i = 0, { length } = reci; i < length; i++) {
        const rec = reci[i];
        if (rec.startsWith('s')) filtrirano.push(rec);
    }

    return filtrirano;
};

console.log(pocinjeSaS(["sunce", "tele", "suma", "sveca", "potok", "reka", "more"]));
