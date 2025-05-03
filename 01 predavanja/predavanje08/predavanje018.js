const removeInvalidChars = str => str.replace(/[^\w]*/g, "");
const upper = str => str.toUpperCase();
const elide = str => str.length > 10 ? str.substr(0, 7) + "..." : str;

var words = "Mr. Jones isn't responsible for this disaster!".split(/\s/);
console.log(words);

console.log(
    words
        .map(removeInvalidChars)
        .map(upper)
        .map(elide)
);
