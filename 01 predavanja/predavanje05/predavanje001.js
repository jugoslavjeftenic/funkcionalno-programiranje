function pitaj(pitanje, ...hendleri) {
    let jePotvrda = confirm(pitanje);

    for (let hendler of hendleri) {
        if (hendler.length == 0) {
            if (jePotvrda) hendler();
        }
        else {
            hendler(jePotvrda);
        }
    }
}

pitaj("Pitanje?", () => alert('Potvrda'), result => alert(result));
