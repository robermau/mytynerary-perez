import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux'
import userActions from '../actions/userActions'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function GoogleSignIn() {
    const dispatch = useDispatch();




    async function handleCallbackResponse(response) {
        console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        const res = await  dispatch(userActions.logInUser({
           email: userObject.email,
            password: userObject.sub,
           from: "google"
        }))

        console.log(res)
    if (res.data.success) {
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    }


    useEffect(() => {
       /* global google*/
        google.accounts.id.initialize({

            client_id:'725048048353-q5lullkdotfiasn2r4oiu81752rer606.apps.googleusercontent.com',
            callback: handleCallbackResponse

        });
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", text: 'signin_with', size: "medium", locale:"en"}
         )
    });
    return (
        <div>
            <div id='buttonDiv'></div>
            </div>
    )



}