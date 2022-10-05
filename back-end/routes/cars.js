const express = require('express')
const app = express()
const router = express.Router()
const Cars = require('../models/cars.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const car = await Cars.find()
        res.json(car)
    } catch (err) {
        res.send('Err: ' + err)
    }
})


router.post('/',async(req, res) => {
    const cars = new Cars({
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo
    })
    try {
        const response = await cars.save()
        res.status(200).send({ message: "Success" });
        // res.json(response)
    } catch(err) {
        res.send('Err: ' + err)
    }
})


router.get('/:id', async(req, res) => {
    try{
        const cars = await Cars.findById(req.params.id)
        res.json(cars)
    }catch(err) {
        res.send('Err: ' + err)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const cars = await Cars.findById(req.params.id)
        const response = await Cars.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const cars = await Cars.findById(req.params.id)
        post.type = req.body.type,
        post.description = req.body.description,
        post.price = req.body.price
        post.photo = req.body.photo

        const response = await cars.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router