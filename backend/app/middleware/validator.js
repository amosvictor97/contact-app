const { body,validationResult } = require('express-validator');

const validateContact = [
    body('nom').notEmpty().withMessage("nom cannot be empty"),
    body('prenoms').notEmpty().withMessage("prenoms cannot be empty"),
    body('telephone').notEmpty().withMessage("telephone cannot be empty"),
    body('email').isEmail().withMessage("Email is not valid"),
    function(req,res,next) { 
        const errorValidation = validationResult(req);
        if (! errorValidation.isEmpty() ) {
            return res.status(400).json({ errors: errorValidation.array() });
        }
        next()
    },

]


module.exports = {
    validateContact,
}