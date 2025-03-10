let userName = "Jova";

function showMessage() {
    userName = "Pera";
    let message = "Zdravo, " + userName;
    console.log(message);
}

console.log(userName + " pre poziva funkcije.");
showMessage();
console.log(userName + " posle poziva funkcije.");
