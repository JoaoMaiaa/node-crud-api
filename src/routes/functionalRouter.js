const express = require('express')

const Functional = require('../models/functionalModels')
const Persons = require('../models/personsModels')

const router = express.Router()

router.get('/', async(req, res)=>{
    try{
        let functional = await Functional.find({})
        res.status(200).json(functional)
    }catch(error){
        res.status(422).send(error)
    }
})

router.get('/:id', async (req, res)=>{
    try{
        let functional = await Functional.findById(req.params.id)
        res.status(200).json(functional)
    }catch(error){
        res.status(422).send(error)
    }
})

router.post('/', async (req, res)=>{
    let { name } = req.body
    try{
        let functional = await Functional.create({ name })
        res.status(200).json(functional)
    }catch(error){
        res.status(422).send(error)
    }
})

// o name é a função e o id é o id da pessoa
router.post('/:id', async(req, res)=>{
    let { name } = req.body
    let functional = await Functional.create({name, persons:req.params.id})
    try{
        let person = await Persons.findById(req.params.id)
        person.functional.push(functional)
        await person.save()
        res.status(200).json(person)
    }catch(error){
        res.status(422).send(error)
    }
})

router.put('/:id', async (req, res)=>{
    let { functional } = req.body
    try{
        await Functional.findByIdAndUpdate(req.params.id, { functional }, { new: true })
    }catch(error){
        res.status(422).send(error)
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        let functional = await Functional.findByIdAndRemove(req.params.id)
        res.status(200).json(functional)
    }catch(error){
        res.status(422).send(error)
    }
})

module.exports = router