const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const contactRouter = require('./routes/contacts')

require('dotenv').config();

const app = express()

app.use(express.json());
app.use(cors())

//database connection
mongoose.connect(`${process.env.DATABASE_URL}`)
    .then(result => console.log('connected to the remote db'))
    .catch(err => console.log(err))

//routing
app.use('/api/contacts',contactRouter)


module.exports = app