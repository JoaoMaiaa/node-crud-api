const express = require('express')

const Persons = require('../models/personsModels')
const Functional = require('../models/functionalModels')

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

router.post('/:id', async (req, res)=>{
    let { name } = req.body
    let persons = await Persons.create({name, functional: req.params.id})
    try{
        let functional = await Functional.findById(req.params.id)
        functional.persons.push(persons)
        await functional.save()
        res.status(200).json(functional)
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