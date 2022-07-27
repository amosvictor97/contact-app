const express = require('express')

const contactRouter = require('../routes/contacts')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
app.use('/api/contacts',contactRouter)


module.exports = app