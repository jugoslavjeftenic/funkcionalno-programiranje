function sracunajOcenu(brojBodova) {
    if (brojBodova > 90) {
        return 10;
    }
    else if (brojBodova > 80) {
        return 9;
    }
    else if (brojBodova > 70) {
        return 8;
    }
    else if (brojBodova > 60) {
        return 7;
    }
    else if (brojBodova > 50) {
        return 6;
    }
    else {
        return 5;
    }
}

console.log(sracunajOcenu(50));
