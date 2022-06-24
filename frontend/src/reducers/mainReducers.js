import {combineReducers} from "redux";
import citiesReducers from "./citiesReducers"
import itinerariesReducer from './itinerariesReducer';



const mainReducers = combineReducers ({
    citiesReducers,itinerariesReducer
    
})

export default mainReducers;