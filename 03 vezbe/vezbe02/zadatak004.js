function sracunajPopust(iznos, popust = 0) {
    console.log(iznos - popust / 100 * iznos);
}

sracunajPopust(1000, 10);
sracunajPopust(1000, 50);
sracunajPopust(1000, 0);
sracunajPopust(1000);
