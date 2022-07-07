import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux'
import userActions from '../actions/userActions'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function GoogleSignUp(props) {
    const dispatch = useDispatch();
   
    


    async function handleCallbackResponse(response) {
   
        console.log(response.credential); // el response son los datos del usuario
        let userObject = jwt_decode(response.credential); // coon jwt desestructurmaos la respuesta
        console.log(userObject);
        
        const res = await dispatch(userActions.signUpUsers({
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            imageUser: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            country:props.props,
             from: 'google'
        }))

      
        console.log(res)
        const errorValidator = res.data.message
        console.log(errorValidator)
    
      
    
    
        if (res.data.from === 'validator') {
          errorValidator.forEach(element => {
           toast.error(element.message)
          
          })
    
        }
        if (res.data.from === 'signup') {
          if (res.data.success) {
            toast.success(res.data.message)
         
          } else {
            toast.error(res.data.message)
          }
        }
    }
    
    useEffect(() => {
       /* global google*/
        google.accounts.id.initialize({ // verifica el client id con el delevelpor account

            client_id:'725048048353-q5lullkdotfiasn2r4oiu81752rer606.apps.googleusercontent.com',
            callback: handleCallbackResponse // con el callback trae la informacion 

        });
        google.accounts.id.renderButton( // renderiza el boton y trae la infor q pasa por detras
            document.getElementById('buttonDiv'),
            { theme: "outline", text: 'signup_with', size: "medium",  locale:"en" }
         )
    });
    return (
        <div>
            <div id='buttonDiv'></div>
            </div>
    )



}