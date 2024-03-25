const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    difficulty: [
        { mode: "easy" },
        { mode: "medium" },
        { mode: "hard" } // added 3 difficulty modes EXCERCISE 3
    ],
    catchPokemon: (pokemonObj) => {
        game.party.push(pokemonObj)
    }
}

game.party.push(pokemon[0]); // Selected starter Bulbasaur EXCERCISE 4

game.party.push(pokemon[90]); //cloyster added
game.party.push(pokemon[93]); // gengar added
game.party.push(pokemon[64]); // alakazam added
// Excercise 5

game.party = game.party.sort((a, b) => a.hp - b.hp) 
// Excercise 6 // sort by hp
    

console.log(game.party);

for (gym of game.gyms) { 
    if (gym.difficulty < 3) { 
     gym.completed = true;
    }
}

//Excercise 7 set gyms to true under 3 difficulty

console.log(game.gyms)

game.party[0] = pokemon[1];
console.log(game.party)

// excercise 8 // evolve

for (let partyMember of game.party) { 
    console.log(partyMember.name)
}

// excercise 9, print names
console.log('----')
console.log('----')

console.log(pokemon[0].name)
console.log(pokemon[3].name)
console.log(pokemon[6].name) // excercise 10, print each starter name

//

game.catchPokemon(pokemon[144]);
console.log(game.party)
// excercise 11, catch pokemon method