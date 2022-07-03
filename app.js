const express = require("express")
const bodyParser = require('body-parser')
 
const app = express()
const PORT = 3000

require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/', (req, res)=>{
    res.send('Hello World')


})

app.listen(PORT, ()=>{
    console.log("Servidor Working")

})

