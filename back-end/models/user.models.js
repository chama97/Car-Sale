const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
})

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id,
        name: this.name,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        password: this.password,
        contact: this.contact
     },'process.env.JWTPRIVATEKEY' , {
		expiresIn: "1d",
	});
	return token;
};

module.exports = mongoose.model('user', userSchema) 