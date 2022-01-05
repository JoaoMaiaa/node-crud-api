const express = require('express')
const routerPersons = require('./src/routes/personsRouter')
require('./config/database')

const app = express()

app.use(express.json())

app.use('/persons', routerPersons)

app.listen(3000, ()=>{
    console.log("Servidor ligado")
})