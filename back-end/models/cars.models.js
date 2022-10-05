const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
   
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('cars', carsSchema) 