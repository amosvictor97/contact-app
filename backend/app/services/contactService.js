const Contact = require('../models/Contact')

const findAll = () => {
    return Contact.find();
}
const findContact = (id) => {
    return Contact.findById(id)
}
const save = (contactData) => {
    let newContact = new Contact(contactData);
    return newContact.save()
}

module.exports = {
    findAll,
    findContact,
    save
}