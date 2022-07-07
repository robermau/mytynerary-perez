const Activity = require("../models/activitys");
const activityControlers = {



    getOneActivity: async (req, res) => {
        const id = req.params.id
        let Activity
        let error = null

        try {
            city = await Activity.findOne({ _id: id })

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : Activity,
            success: error ? false : true,
            error: error
        })
    },



    addActivity: async (req, res) => {
        const { nameActivity,
            imageActivity,
            itinerary
            } = req.body
        let activities
        let error = null

        try {
            activities = await  new Activity({
                nameActivity: nameActivity,
                imageActivity: imageActivity,
                itinerary:itinerary
                
            }).save()

        } catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },


    getActivities: async (req, res) => {
        let activity
        let error = null
        try {
            activity = await Activity.find().populate('activitys')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { activity },
            success: error ? false : true,
            error: error
        })

    },

    c: async (req, res) => {
        const id = req.params.id
        const Activity = req.body.data
        let activitydb
        let error = null

        try {
            activitydb = await Activity.findOneAndUpdate({ _id: id }, Activity, { new: true })
        }
        catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : activitydb,
            success: error ? false : true,
            error: error
        })

    },


    removeActivities: async (req, res) => {
        const id = req.params.id
        let activity
        let error = null

        try {
            activity = await activity.findOneAndDelete({ _id: id })
        }
        catch (err) { error = err }


        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    },


    findActivityFromItinerary: async (req, res) => {
        const id = req.params.id

        let itineraries
        let error = null

        try {
            itineraries = await Activity.find({_id:id}).populate('itineraries')
        }
        catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })

    }


    // multiplesItineraries: async (req, res) => {
    //     let Activity = []
    //     const data = req.body.data
    //     let error = null
    //     try {
    //         data.map(async (item) => {
    //             await new Activity({
    //                 name: item.name,
    //                 population:item.population,
    //                 description: item.description,
    //                 image:item.image
    //             }).save()
    //         })
    //     } catch (err) { error = err }
    //     Activity = await Activity.find()
    //     res.json({
    //         response: error ? 'ERROR' : Activity,
    //         success: error ? false : true,
    //         error: error
    //     })
    // }


}
module.exports = activityControlers