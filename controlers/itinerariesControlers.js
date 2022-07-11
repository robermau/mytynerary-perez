const Itinerary = require("../models/itinerary");
const itinerariesControlers = {



    getOneItineraries: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null

        try {
            itinerary = await Itinerary.findOne({ _id: id })
             res.json({ success: false, response:{itinerary}}).populate("comments.userid")
        } 
        catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    }, 




    addItineraries: async (req, res) => {
        const { nameItinerary,
            imagePerson,
            namePerson,
            precie,
            hashtags,
            likes,
            duration,
            activitys,
            city } = req.body.data
        let itinerary
        let error = null

        try {
            itinerary = await Itinerary({
                nameItinerary: nameItinerary,
                imagePerson: imagePerson,
                namePerson: namePerson,
                precie: precie,
                hashtags: hashtags,
                likes: likes,
                duration: duration,
                activitys: activitys,
                city: city
            }).save()

        } catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },


    getItineraries: async (req, res) => {
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find().populate("city")
        } catch (err) {error = err}
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    },

    modifyItinerary: async (req, res) => {
        const id = req.params.id
        const itineraries = req.body
        let itinerarydb
        let error = null
        try {
            itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itineraries, { new: true })
        } catch (err) {error = err}
        res.json({
            response: error ? 'ERROR' : itinerarydb,
            success: error ? false : true,
            error: error
        })
    },


    removeItineraries: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null

        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
        }
        catch (err) { error = err }


        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },


    findItineraryFromCity: async (req, res) => {
        const id = req.params.id

        let itineraries
        let error = null

        try {
            itineraries = await Itinerary.find({city:id}).populate('activitys')
        }
        catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })

    },
    likeDislike: async (req, res) => {
        const id = req.params.id 
        const user = req.user.id
console.log(id)
         await Itinerary.findOne({ _id: id })

            .then((itineraries) => {
              console.log(itineraries)
              if (itineraries.likes.includes(user)) {
                    console.log(itineraries)
                     Itinerary.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })//PULL QUITA, SACA
                        .then((response) => res.json({ success: true, response: response.likes , message:"Your are not like yet" }))
                        .catch((error) => console.log(error))
               } else {
                    Itinerary.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })//PUSH AGREGA
                        .then((response) => res.json({ success: true, response: response.likes,  message:"Thank for your like" }))
                        .catch((error) => console.log(error))
                }
             })
            .catch((error) => res.json({ success: false, response: error }))
    },




}
module.exports = itinerariesControlers