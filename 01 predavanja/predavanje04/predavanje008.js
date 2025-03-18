let hero = {
    name: "Batman"
};

console.log(hero.hasOwnProperty('name'));
console.log(hero.hasOwnProperty('realName'));

console.log('name' in hero);
console.log('realName' in hero);
