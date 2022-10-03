const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
   
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('car', carSchema) 