const Router = require("express").Router();

const citiesControlers = require("../controlers/controlers");
const { getCities, getOneCity, addCity, modifyCity, removeCity,multiplesCities } =
citiesControlers;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/multiplesCities").post(multiplesCities)
module.exports = Router;