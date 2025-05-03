const filter = (array, fn) => {
    let results = [];
    for (const value of array) {
        (fn(value)) ? results.push(value) : undefined;
    }
    return results;
};

const map = (array, fn) => {
    let results = [];
    for (const value of array) {
        results.push(fn(value));
    }
    return results;
};

let apressBooks = [
    {
        "id": 111,
        "title": "C# 6.0",
        "author": "ANDREW TROELSEN",
        "rating": [4.7],
        "reviews": [{ good: 4, excellent: 12 }]
    },
    {
        "id": 222,
        "title": "Efficient Learning Machines",
        "author": "Rahul Khanna",
        "rating": [4.5],
        "reviews": []
    },
    {
        "id": 333,
        "title": "Pro AngularJS",
        "author": "Adam Freeman",
        "rating": [4.0],
        "reviews": []
    },
    {
        "id": 444,
        "title": "Pro ASP.NET",
        "author": "Adam Freeman",
        "rating": [4.2],
        "reviews": [{ good: 14, excellent: 12 }]
    }
];

console.log(map(filter(apressBooks, (book) => book.rating[0] > 4.5), (book) => {
    return { title: book.title, author: book.author };
}));
