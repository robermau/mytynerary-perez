const Router = require("express").Router();

const citiesControlers = require("../controlers/controlers");
const { getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities } =
    citiesControlers;

const itineriesControlers = require("../controlers/itinerariesControlers");
const { getItineraries, getOneItineraries, addItineraries, modifyItineraries, removeItinerariesy, multiplesItineraries } = 
itnerariesControlers;


Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/multiplesCities").post(multiplesCities)

Router.route("/itineraries").post(multiplesItineraries).get( getItineraries)
module.exports = Router;