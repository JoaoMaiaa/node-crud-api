const express = require('express')
const routerPersons = require('./src/routes/personsRouter')
const routerFunctional = require('./src/routes/functionalRouter')
require('./config/database')

const app = express()

app.use(express.json())

app.use('/persons', routerPersons)
app.use('/functional', routerFunctional)

app.listen(3000, ()=>{
    console.log("Servidor ligado")
})