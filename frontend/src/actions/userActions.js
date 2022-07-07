import axios from 'axios';

const userActions = {
    signUpUsers: (userData) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })

                console.log(res)
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                });
                return res
            } catch (error) {
                console.log(error)
            }
        }


    },


    logInUser: (logedUser) => {
        console.log(logedUser)
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signin', { logedUser })
            console.log(user)
            if (user.data.success) {

                localStorage.setItem('token', user.data.response.token)
                console.log(user.data.success) //tomo el token que le envie desde el back y lo envio al local storage
                dispatch({ type: "GET_USER", payload: user.data.response.userData });
            }
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            });
            return user
        }

    },
    verifyToken: (token) => {
        console.log(token)
        return async (dispatch, getState) => {

            await axios.get('http://localhost:4000/api/auth/token', {  // la ruta recibe a traveza del header el metodo de authorizacion bearer
                headers: {
                    'Authorization': 'Bearer ' + token
                }, //  Bearer es un metodo que permite autenticar y autorizar usuarios 
                   // El espacio es para que no se quede el token pegado.

            })
         
                .then(user => {

                    if (user.data.success) {

                        dispatch({ type: 'GET_USER', payload: user.data.response });
                        dispatch({ type: 'GET_SIGN' ,
                            payload: { view:true,
                                message:user.data.message,
                                userData:user.data.response,
                                success: user.data.success

                            }
                        });
                    } else { localStorage.removeItem('token') }
                })



                .catch(error => {
                    if (error.response.status === 401)
                        dispatch({
                            type: "message",
                            payload: {
                                view: true,
                                message: "Please Log In again",
                                success: false
                               
                            }
                        })

                    localStorage.removeItem('token')
                })
        }
    },
    logOutUser: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({
                type: 'GET_USER',
                payload: null
            })
        }
    }


}
export default userActions