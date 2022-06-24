const Itinerary = require("../models/itinerary");
const itinerariesControlers = {



    getOneItineraries: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null

        try {
            city = await Itinerary.findOne({ _id: id })

        } catch (err) {
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
            itineraries = await Itinerary.find().populate('city')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })

    },

    modifyItineraries: async (req, res) => {
        const id = req.params.id
        const itinerary = req.body.data
        let itinerarydb
        let error = null

        try {
            itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
        }
        catch (err) { error = err }
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
            itineraries = await Itinerary.find({city:id}).populate('city')
        }
        catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })

    }


    // multiplesItineraries: async (req, res) => {
    //     let itinerary = []
    //     const data = req.body.data
    //     let error = null
    //     try {
    //         data.map(async (item) => {
    //             await new Itinerary({
    //                 name: item.name,
    //                 population:item.population,
    //                 description: item.description,
    //                 image:item.image
    //             }).save()
    //         })
    //     } catch (err) { error = err }
    //     itinerary = await Itinerary.find()
    //     res.json({
    //         response: error ? 'ERROR' : itinerary,
    //         success: error ? false : true,
    //         error: error
    //     })
    // }


}
module.exports = itinerariesControlers