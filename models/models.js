const mongoose =require('mongoose')

const citySchema = new mongoose.Schema({
    name:{type:String, required:true},
    description: {type:String, required:true},
    population: {type:String, required:true},
    image: {type:String, required:true}
    
})


const City = mongoose.model('cities', citySchema)
module.exports=City