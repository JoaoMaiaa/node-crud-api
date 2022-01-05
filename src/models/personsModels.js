const mongoose = require('mongoose')

const personsSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    functional:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Functional'
    }]
})

module.exports = mongoose.model('Persons', personsSchema)