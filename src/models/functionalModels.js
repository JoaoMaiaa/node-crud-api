const mongoose = require('mongoose')

const functionalSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    persons:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Persons',
        required: true
    }
})

module.exports = mongoose.model('Functional', functionalSchema)