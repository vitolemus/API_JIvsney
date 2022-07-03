const express = require("express")
const bodyParser = require('body-parser')

const apiRouter = require('./routes/api')
 
const app = express()
const PORT = 3000

require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.use('/api', apiRouter)

app.listen(PORT, ()=>{
    console.log("Servidor Working")

})

