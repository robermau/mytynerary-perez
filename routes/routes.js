const Router = require("express").Router();

const citiesControlers = require("../controlers/controlers");
const { getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities } =
    citiesControlers;

const itinerariesControlers = require("../controlers/itinerariesControlers");
const { getItineraries, getOneItineraries, addItineraries, modifyItineraries, removeItineraries, findItineraryFromCity } = 
itinerariesControlers;


Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/multiplesCities").post(multiplesCities)

Router.route("/itineraries").get(getItineraries).post(addItineraries).get(getOneItineraries)
Router.route("/itinerariesbycities/:id").get(findItineraryFromCity)
Router.route("/itineraries/:id").get(getOneItineraries)
module.exports = Router;