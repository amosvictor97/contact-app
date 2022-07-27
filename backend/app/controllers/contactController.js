const { findAll,findContact,save } = require('../services/contactService')


const getAllContact = async (req, res) => {
    try {
        const contacts = await findAll()
        return res.json(contacts)
    }
    catch(err) {
        return res.status(500).send(err)
    }
}

const getContact = (req, res) => {

}

const createContact = async (req,res) => {
    try {
        
        const contactData = {
            'nom': req.body.nom,
            'prenoms': req.body.prenoms,
            'telephone': req.body.telephone,
            'email': req.body.email,
        }

        const newContact = await save(contactData)
        return res.json(newContact)

    } catch(err) {
        return res.status(500).send(err)
    }
}

const deleteContact = (req,res) => {

}



module.exports = {
    getAllContact,
    getContact,
    createContact
}