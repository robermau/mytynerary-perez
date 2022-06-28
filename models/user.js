const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firtName: { type: String, required: true },
    lastName: { type: String, required: true },
    imageUser: { type: String, required: true },
    country: { type: String, required: true },
    streetAdress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    email:{ type: String, required: true }

})


const User = mongoose.model('users', userSchema)
module.exports = User