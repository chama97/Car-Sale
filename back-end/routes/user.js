const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/user.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async(req, res) => {
    const user = new User({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact
    })

    try {
        const response = await user.save()
        res.status(200).send({ message: "Success" });
        // res.json(response)
    } catch(err) {
        res.send('Err: ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err) {
        res.send('Err: ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const response = await user.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.name = req.body.name,
        user.address = req.body.address,
        user.email = req.body.email,
        user.password = req.body.password,
        user.contact = req.body.contact

        const response = await user.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router