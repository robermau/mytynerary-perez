import {combineReducers} from "redux";
import citiesReducers from "./citiesReducers"
import itinerariesReducer from './itinerariesReducer';

// el main reducer combina todos los reducer con todos sus estados todo

const mainReducers = combineReducers ({
    citiesReducers,itinerariesReducer
    
})

export default mainReducers;