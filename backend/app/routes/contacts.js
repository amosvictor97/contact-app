const contactController = require('../controllers/contactController')
const express = require('express')

const router = express.Router()


router.get('/',contactController.getAllContact)
router.get('/(:id)',contactController.getContact)
router.post('/',contactController.createContact)

module.exports = router