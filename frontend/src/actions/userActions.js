import axios from 'axios';

const userActions = {
    signUpUsers: (userData) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })

                console.log(res)
                dispatch({
                    type: 'GET_USER',
                    payload: {
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }
        }


    },


    logInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/signin', { logedUser })
            console.log(res)
            dispatch({ type: 'GET_SIGN', payload: { message: res.data.message, success: res.data.success } })
            return res
        }

    }


}
export default userActions