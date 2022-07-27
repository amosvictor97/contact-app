const { findAll,findContact,save,destroy,update } = require('../services/contactService')


const getAllContact = async (req, res) => {
    try {
        const contacts = await findAll()
        return res.json(contacts)
    }
    catch(err) {
        return res.status(500).send(err)
    }
}

const getContact = async (req, res) => {
    try {
        const id = req.params.id      
        const contact = await findContact(id)
        if(!contact) return res.status(404).json("Resource not found")

        return res.json(contact)
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
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

const updateContact = async (req, res) => {
    try {

        const id = req.params.id

        const contactData = {
            'nom': req.body.nom,
            'prenoms': req.body.prenoms,
            'telephone': req.body.telephone,
            'email': req.body.email,
        }

        await update(id,contactData)
        return res.status(204).json("resource updated succesfully")

    } catch(err) {
        return res.status(500).send(err)
    }
}



const deleteContact = async (req,res) => {
    try {

        const id = req.params.id
        const result = await destroy(id)
        return res.status(204).json("resource deleted succesfully")

    } catch(err) {
        return res.status(500).send(err)
    }
}


const bulkDelete = async (req, res) => {

}


module.exports = {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    bulkDelete
}