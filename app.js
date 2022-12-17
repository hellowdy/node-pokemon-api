const express = require('express');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Hello again, Express !'));


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));