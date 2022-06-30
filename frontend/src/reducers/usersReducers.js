const initialState= {

    user:{
        message:"",
        success:false

    },
       userSign:{
        message:"",
        success:false

    }
}

const usersReducers = (state= initialState, action) => {
  
    switch(action.type){
        case 'GET_USER' : return {
            ...state,
            user:action.payload

        }

        case 'GET_SIGN' : return {
            ...state,
            userSign:action.payload

        }
        default: return state
    }

} 




export default usersReducers