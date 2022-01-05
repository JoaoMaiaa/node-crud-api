const express = require('express')

const Persons = require('../models/personsModels')

const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        let persons = await Persons.find({})
        res.status(200).json(persons)
    }catch(error){
        res.status(422).send(error)
    }
})

router.post('/', async (req, res)=>{
    let { name } = req.body
    try{
        let person = await new Persons({name})
        person.save()
        res.status(200).json(person)
    }catch(error){
        res.status(422).send(error)
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        let person = await Persons.findByIdAndRemove(req.params.id)
        res.status(200).json(person)
    }catch(error){
        res.status(422).send(error)
    }
})

module.exports = router