const initialState = { // defino el estado inicial
    itineraries: [], // para contener los itinerarios
    getOneItinerary: [], // para contener 1 itinerario
    getItinerariesFromCity: [] // para contener los itinerarios por ciudad
}

const itinerariesReducer = (state = initialState, action) => { // los reductores son una funcion que requiere 2 parametro el stado incial y la accion que llegan con los dipatch

    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload
            }
        case "GET_ONE_ITINERARY":
            return {
                ...state,
                getOneItinerary: action.payload
            }
        case "FIND_ITINERARIES_FROM_CITY":
            return {
                ...state,
                getItinerariesFromCity: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer