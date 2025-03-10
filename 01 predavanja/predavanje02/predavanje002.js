let mat = {
    "faktor": function factorial(n) {
        alert(n);
        if (n <= 1) {
            return 1;
        } return n * factorial(n - 1);
    }
};

alert(mat.faktor(3));
