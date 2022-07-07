const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    nameActivity: { type: String, required: true },
    imageActivity: { type: String, required: true },
    itinerary: { type: mongoose.Types.ObjectId, ref: "itineraries" }


})


const Activity = mongoose.model('activities', activitySchema)
module.exports = Activity