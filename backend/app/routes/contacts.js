const contactController = require('../controllers/contactController')
const express = require('express')
const validator = require('../middleware/validator')

const router = express.Router()


router.get('/',contactController.getAllContact)
router.get('/:id',contactController.getContact)

router.post('/',validator.validateContact, contactController.createContact)

router.put('/:id',contactController.updateContact)
router.delete('/:id',contactController.deleteContact)

//delete multiple contact
router.post('/delete-all',contactController.bulkDelete)

module.exports = router