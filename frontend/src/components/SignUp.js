import { useDispatch } from "react-redux"
import userActions from "../actions/userActions"
import GoogleSignUp from "./GoogleSignup";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from "react";



export default function SingUp() {

 const [country , setCountry] = useState("")
  const dispatch = useDispatch()


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      imageUser: event.target[8].value,
      streetAdress: event.target[4].value,
      city: event.target[5].value,
      state: event.target[6].value,
      zipcode: event.target[7].value,
      password: event.target[3].value,
      country: event.target[4].value,
      email: event.target[2].value,
      from: "form-Signup",
      
    }

    const res = await dispatch(userActions.signUpUsers(userData))
    console.log(res)
    const errorValidator = res.data.message
    console.log(errorValidator)

 


    if (res.data.from === "validator") {
      errorValidator.forEach(element => {
       toast.error(element.message)
      })

    }
    if (res.data.from === "signup") {
      if (res.data.success) {
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    }

    
 

  }
  const countries = ["Argentina","Brasil","Chile","Usa","Spain"]
  return (
             <div className=" bg-login bg-signup"> 

            <div className="country">
          <label className="mb-8 ml-5 mr-6 text-gray-900 label">  <h1> Select your country for registration</h1> Country</label>
              <select onChange={e=> setCountry(e.target.value)} id="country" name="country" className="mt-1 bg-white border-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ">
                <option> </option>
                
                {countries.map((country, index) => (
                                        <option key={country}>{country}</option>
                                    ))}
              </select>
              </div>
              {
                country ? (
                <div className="bg-login ">
                <form className="text-xl form" onSubmit={handleSubmit}>
                   <div className="bg-style">
                     <h3 className="mt-4 text-gray-900 text-form ">Personal Information</h3>
                     <div className="display-form">
                     <div className="labelName ">
                       <div className="direction "> 
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label">First name</label>
                       <input type="text" name="first-name" id="first-name" className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" />
         
         
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label">Last name</label>
                       <input type="text" name="last-name" id="last-name" className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" />
                    
                       </div>
                     <div className="direction">
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label">Email address</label>
                       <input type="text" name="email-address" id="email-address" className="mt-1 rounded-md input focus:ring-indigo-500 focus:border-indigo-500border-gray-300" />
         
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label">Password</label>
                       <input id="password" name="password" type="password" required className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" placeholder="Password" />
         
         
                     </div>
         
                     <div className="direction" >
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label">Street address</label>
                       <input type="text" name="street-address" id="street-address" className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" />
                       <label className="mb-8 ml-5 mr-6 label text-gray-9000">City</label>
                       <input type="text" name="city" id="city" className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" />
         
                     </div>
                     <div className="direction">
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label">State / Province</label>
                       <input type="text"  id="region" className="rounded-md input mt-1border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                
                       <label className="mb-8 ml-4 mr-6 text-gray-900 label">ZIP / Postal code</label>
                       <input type="text" name="postal-code" id="postal-code" className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" />
                     </div>
                     <div className="direction">
                       <label className="mb-8 ml-5 mr-6 text-gray-900 label"> Photo </label>
                       <input type="text" className="mt-1 border-gray-300 rounded-md input focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://www.prueba.com/" />
                  </div>
                     </div>
                      </div>
                   <div className="btn-form"> 
                   <GoogleSignUp props={country}/>
                   <button type="submit" className="inline-flex justify-center px-4 py-2 mt-8 mb-8 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
                 </div>
                 </div>
         
               </form>
             </div>
             
             )  : null   }



           </div>


)
}