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
        if (game.party.length < 6 ) {
            game.party.push(pokemonObj)
        }
        else
            game.collection.push(pokemonObj)  //excercise 18
        for (let item of game.items) {
            if (item.name === 'pokeball') {
                item.quantity -= 1; // excercise 12;
            }
        }
        console.log(game.items);
        console.log(game.party)
    },
    gymCompleted: {
        completed: 0,
        incomplete: 0,
    }
    ,
    gymStatus: () => {
        for (let gym of game.gyms) {
            if (gym.completed === true) {
                game.gymCompleted.completed++;
            }
            else game.gymCompleted.incomplete++;
        }
        console.log(game.gymCompleted)  // excercise 14
    },
    partyCount: () => {
        console.log(`Your party count ${game.party.length}`) // excercise 15
    },
    collection: [], // excercise 18
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
// excercise 11, catch pokemon method

for (gym of game.gyms) { 
    if (gym.difficulty < 6) { 
     gym.completed = true;
    }
}
console.log(game.gyms);
// excercise 13;

game.gymStatus(); 
// excercise 14
game.partyCount(); 
// excercise 15

for (gym of game.gyms) { 
    if (gym.difficulty < 8) { 
     gym.completed = true;
    }
}
console.log(game.gyms);
// excercise 16;
console.log('')
console.log('')
console.log(game)

////////////////
/// LEVEL UP /// :}
/////////////// !!!!!

//excercise 18
game.catchPokemon(pokemon[12]);
game.catchPokemon(pokemon[72]);
game.catchPokemon(pokemon[33]);
game.catchPokemon(pokemon[77]);
game.catchPokemon(pokemon[65]);

console.log('PARTY PARTY')
console.log(game.party)
console.log('PARTY PARTY')

console.log('COLLECTION COLLECTION')
console.log(game.collection);
console.log('COLLECTION COLLECTION')


//excercise 18