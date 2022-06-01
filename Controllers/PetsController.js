const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const Pets = require('../Models/Pets')
/**
 * @api {get} /pets List all pets
 * @apiName listPets
 * @apiQuery {Number} limit "How many items to return once time"
 */
router.get('/pets', async (req, res) => {
    const limit = req.query.limit;
    Pets.findAll({ attributes: ['id', 'name'], limit: (limit ? (limit > 100 ? 100 : parseInt(limit)) : 10) })
        .then(pets => {
            res.status(200).json(JSON.parse(JSON.stringify(pets)))
        }).catch(err => {
            res.send(500).send("Unexpected error")
        })

})
/**
 * @api {post} /pets Create a pet
 * @apiName createPets
 * @apiBody {String} name "The name of the pet to create"
 */
router.post('/pets', async (req, res) => {
    const data = req.body;
    Pets.create({
        name: data.name
    },{fields:['name']}).then( pet => {
        result = pet.toJSON()
        console.log(result);
        res.status(201).send(null)
    }).catch( err => {
        console.log(err.message);
        res.status(500).send("Unexpected error");
    })
})
/**
 * @api {get} /pets Info for a specific pet
 * @apiName showPetById
 * @apiParam {Number} petId "The id of the pet to retrieve"
 */
router.get('/pets/:petId', async (req, res) => {
    const petId = req.params.petId;
    Pets.findByPk(petId, {attributes: ['id', 'name']})
    .then( pet => {
        res.status(200);
        if(pet == null)
            res.json({});
        else
            res.send(JSON.parse(JSON.stringify(pet)))
    }).catch(err => {
        res.send(500).send("Unexpected error")
    })
})

module.exports = router;