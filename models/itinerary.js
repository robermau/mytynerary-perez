const mongoose =require('mongoose')

const itinerarySchema = new mongoose.Schema({
    nameItinerary:{type:String, required:true},
    imagePerson: {type:String, required:true},
    namePerson: {type:String, required:true},
    precie: {type:String, required:true},
    hashtags: {type:String, required:true},
    likes: {type:String, required:true},
    duration: {type:String, required:true},
    activitys: {type:Array, required:true},
    city: {type:mongoose.Types.ObjectId,ref:"cities"}
    
})


const itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports=itinerary;  