let ulaznaListaKnjiga = [
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

const map = (array, fn) => {
    let results = [];
    for (const value of array) {
        results.push(fn(value));
    }
    return results;
};

const fn = (knjiga) => {
    return {
        naslov: knjiga.title,
        autor: knjiga.author
    };
};

let izlaznaLista = map(ulaznaListaKnjiga, fn);
console.log(izlaznaLista);
