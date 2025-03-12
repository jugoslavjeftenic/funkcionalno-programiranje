function kaziZdravo() {
    var kazi = function () {
        alert(zdravo);
    };

    var zdravo = "Zdravo, narode!";
    return kazi;
}

var kaziZdravoZatvaranje = kaziZdravo();
kaziZdravoZatvaranje();
