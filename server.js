require('dotenv').config()
const passport=require('passport')
const express=require('express')
const app=express()
const Router=require("./routes/routes");
const PORT=4000
const cors=require('cors')




require('./config/database')
app.use(passport.initialize())

app.use(cors())

app.use(express.json());
app.use("/api", Router);
app.set('port', PORT)





app.listen(PORT, () => 
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' + PORT))

