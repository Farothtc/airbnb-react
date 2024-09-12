const num = [1, 2, 3, 4, 5];
const sqr = num.map((number) => number * number);
console.log(sqr);

const names = ["alice", "bob", "charlie", "danielle"];
const newNames = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(newNames);

const pokemon = ["Bulbasaur", "Charmender", "Squirtle"];
const newPokemon = pokemon.map((poke) => `<p>${poke}</p>`);
console.log(newPokemon);
