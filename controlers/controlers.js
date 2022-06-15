const Cities = require("../models/models");
const citiesControlers = {



getOneCity: async (req, res) => {
    const id = req.params.id
    let city
    let error = null

    try {
        city = await Cities.findOne({ _id: id })

    } catch (err) {
        error = err
        console.log(error)
    }
    res.json({
        response: error ? 'ERROR' : city,
        success: error ? false : true,
        error: error
    })
},



addCity: async (req, res) => {
    const { name, description, population,  image } = req.body.data 
    let city
    let error = null

    try {
        city = await Cities({
            name: name,
            description: description,
            population: population,
            image:image
        }).save()

    } catch (err) { error = err }

    res.json({
        response: error ? 'ERROR' : city,
        success: error ? false : true,
        error: error
    })
},


getCities: async (req, res) => {
    let cities
    let error = null
    try {
        cities = await Cities.find()
    } catch (err) { error = err }
    res.json({
        response: error ? 'ERROR' : { cities },
        success: error ? false : true,
        error: error
    })

},

modifyCity: async (req, res) => {
    const id = req.params.id
    const city = req.body.deta
    let citydb
    let error = null

    try {
        citydb = await Cities.findOneAndUpdate({ _id: id }, city, { new: true })
    }
    catch (err) { error = err }
    res.json({
        response: error ? 'ERROR' : citydb,
        success: error ? false : true,
        error: error
    })

},


removeCity : async (req,res) => {
    const id = req.params.id
    let city
    let error = null

 try {
    city=await Cities.findOneAndDelete({ _id: id })
    }   
 catch (err) {error = err}


 res.json ({
  response:error ? 'ERROR' : city,
  success:error ? false : true,
  error:error
})
}

} 
module.exports=citiesControlers