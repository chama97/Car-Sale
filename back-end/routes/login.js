const express = require('express')
const app = express()
const router = express.Router()
const Login = require('../models/user.models')

app.use(express.json())


router.post('/', async(req, res) => {
    try {
        const user = await Login.findOne({ email: req.body.email, password: req.body.password });

        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });
        
			
        const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
      
    } catch(err) {
        res.send('Err: ' + err)
    }
})

module.exports = router