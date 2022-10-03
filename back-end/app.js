const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const login = require('./routes/login')
const car = require('./routes/car')

const app = express()
const port = 4000

const url = 'mongodb://localhost/carsale'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/user', user)
app.use('/login', login)
app.use('/car', car)


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})