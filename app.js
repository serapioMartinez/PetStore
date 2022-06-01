
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5001;
const app = express();

const pets = require('./Controllers/PetsController');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true
    })
);

app.use('/',pets)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
module.exports = app