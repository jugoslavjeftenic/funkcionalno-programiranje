function spoljasnja() {
    let a = 8;

    function unutrasnja() {
        console.log(a);
    }

    a = 10;

    return unutrasnja;
}

// spoljasnja()();

let f = spoljasnja();
f();
console.log(f);
