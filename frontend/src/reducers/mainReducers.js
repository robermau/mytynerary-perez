import {combineReducers} from "redux";
import citiesReducers from "./citiesReducers"
import itinerariesReducer from './itinerariesReducer';
import usersReducers from './usersReducers';



// el main reducer combina todos los reducer con todos sus estados todo

const mainReducers = combineReducers ({
    citiesReducers,itinerariesReducer,usersReducers
    
})

export default mainReducers;