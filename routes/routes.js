
const Router = require("express").Router();
const validator = require ("../config/validator")
const citiesControlers = require("../controlers/controlers");
const passport =require('../config/passport')
const { getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities } =
    citiesControlers;

const itinerariesControlers = require("../controlers/itinerariesControlers");
const { getItineraries, getOneItineraries, addItineraries, modifyItinerary, removeItineraries, findItineraryFromCity,likeDislike } = 
itinerariesControlers;

const usersControlers = require("../controlers/usersControlers")
const {signUpUsers , logInUser,verifyMail,verifyToken} = usersControlers;

const activityControlers=require("../controlers/activityControlers")
const {addActivity,getActivities,findActivityFromItinerary,getOneActivity,modifyActivities} = activityControlers;

const CommentaryControlers = require('../controlers/commentsControlers')
const {addComment, modifyComment,deleteComment}= CommentaryControlers




Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

Router.route("/multiplesCities").post(multiplesCities)

Router.route("/itineraries").get(getItineraries).post(addItineraries)
Router.route("/itinerariesbycities/:id").get(findItineraryFromCity)

Router.route("/itinerary/:id").get(getOneItineraries)
  
Router.route('/itineraries/likes/:id')
.put(passport.authenticate('jwt',{session:false}),likeDislike)


Router.route("/activities").post(addActivity).get(getActivities)
Router.route("/activitiesbyItineraries/:id").get(findActivityFromItinerary)
Router.route("/activities/:id").get(getOneActivity)

Router.route('/itinerary/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)
.put(passport.authenticate('jwt',{ session: false }),modifyComment)

Router.route('/itineraries/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),deleteComment)





Router.route("/verify/:string").get(verifyMail)
Router.route("/auth/signin").post(logInUser)
Router.route("/auth/signup").post(validator,signUpUsers)
Router.route('/auth/token').get(passport.authenticate('jwt', {session: false}),verifyToken)
module.exports = Router;