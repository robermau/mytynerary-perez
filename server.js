
const express=require('express')
const app = express()
const Router = require("./routes/routes");
const PORT = 4000


require('dotenv').config()
require('./config/database')


app.use(express.json());
app.use("/api", Router);
app.set('port', PORT)




app.listen(PORT, () => 
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' + PORT))

