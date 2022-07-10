const mongoose =require('mongoose')

const itinerarySchema = new mongoose.Schema({
    nameItinerary:{type:String, required:true},
    imagePerson: {type:String, required:true},
    namePerson: {type:String, required:true},
    precie: {type:String, required:true},
    hashtags: {type:String, required:true},
    likes: {type:Array},
    duration: {type:String, required:true},
     activitys:[{type:mongoose.Types.ObjectId,ref:"activities" }], 
    city: {type:mongoose.Types.ObjectId,ref:"cities"},
    comments: [{
        userid:{type: mongoose.Types.ObjectId, ref:'users'},
        comment:{type:String}
    }]
    
})


const itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports=itinerary;    