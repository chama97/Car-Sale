const express = require('express')
const app = express()
const router = express.Router()
const Post = require('../models/car.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async(req, res) => {
    const posts = new Post({
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo
    })

    try {
        const response = await posts.save()
        res.json(response)
    } catch(err) {
        res.send('Err: ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const user = await Post.findById(req.params.id)
        res.json(user)
    }catch(err) {
        res.send('Err: ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        post.type = req.body.type,
        post.description = req.body.description,
        post.price = req.body.price
        post.photo = req.body.photo

        const response = await post.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router