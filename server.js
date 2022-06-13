
require('dotenv').config()
require('./config/database')



const express=require('express')
const app = express()

const PORT = 4000

app.set('port', PORT)



app.listen(PORT, () => 
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' + PORT))

