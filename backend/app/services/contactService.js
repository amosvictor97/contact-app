const Contact = require('../models/Contact')

const findAll = () => {
    return Contact
        .find()
        .sort({ 'createdAt': -1 });
}

const findContact = (id) => {
    return Contact.findOne({_id:id})
}


const save = (contactData) => {
    let newContact = new Contact(contactData);
    return  newContact.save()
}


const update = (id,newData) => {
    return Contact.findByIdAndUpdate(id,newData)
}

const destroy = (id) => {
    return Contact.findOneAndDelete({_id : id})
}

const deleteMany =  (idList) => {
    return Contact.deleteMany({_id: { $in: idList}})
}

module.exports = {
    findAll,
    findContact,
    save,
    update,
    destroy,
    deleteMany
}