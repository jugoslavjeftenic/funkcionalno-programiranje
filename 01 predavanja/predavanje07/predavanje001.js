const izbacivac = reci => {
    const filtrirano = [];

    for (let i = 0, { length } = reci; i < length; i++) {
        const rec = reci[i];
        if (rec.length !== 4) filtrirano.push(rec);
    }

    return filtrirano;
};

console.log(izbacivac(["sunce", "tele", "suma", "potok"]));
