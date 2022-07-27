const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const contactRouter = require('./routes/contacts')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//database connection
mongoose.connect(`${process.env.DATABASE_URL}`)
    .then(result => console.log('connected to the remote db'))
    .catch(err => console.log(err))

//routing
app.use('/api/contacts',contactRouter)


module.exports = app