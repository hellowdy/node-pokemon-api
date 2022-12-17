const express = require('express');
const { sucess } = require('./helper');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Hello again, Express !'));

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    const message = 'Un pokémon a bien été trouvé.';
    res.json(sucess(message, pokemon));
});

// le nouveau point de terminaison, affichant  le nombre total de pokémons :
app.get('/api/pokemons', (req,res) => { 
    res.send(`Il y a ${pokemons.length} pokémons dans le pokédex, pour le moment.`);
});

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));