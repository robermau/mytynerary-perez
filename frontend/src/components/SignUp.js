import { useDispatch, useSelector } from "react-redux"
import userActions from "../actions/userActions"

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



export default function SingUp() {


  const dispatch = useDispatch()


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      imageUser: event.target[8].value,
      streetAdress: event.target[5].value,
      city: event.target[6].value,
      state: event.target[9].value,
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
    if (res.data.from === "form-Signup") {
      if (res.data.success) {
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    }

    


  }
  return (






    <div className="bg-login ">



      <form className="form text-xl" onSubmit={handleSubmit}>
        <div className="bg-style">
          <h3 className=" mt-4 text-gray-900">Personal Information</h3>



          <div className="display-form">
            <div className="labelName">
              <label className=" mr-6 ml-5 mb-8 label text-gray-900">First name</label>
              <input type="text" name="first-name" id="first-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md" />


              <label className="mr-6 ml-5 mb-8 label text-gray-900">Last name</label>
              <input type="text" name="last-name" id="last-name" className="mt-1 mb-8  focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md" />
            </div>

            <div className="direction">
              <label className=" mr-6 ml-5 label text-gray-900">Email address</label>
              <input type="text" name="email-address" id="email-address" className="mt-1 mb-8  focus:ring-indigo-500 focus:border-indigo-500border-gray-300 rounded-md" />

              <label className=" mr-6 ml-5 label text-gray-900">Password</label>
              <input id="password" name="password" type="password" required className="mt-1 mb-8  focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md" placeholder="Password" />


            </div>

            <div className="direction" >
              <label className=" mr-6 ml-5 label text-gray-900">Street address</label>
              <input type="text" name="street-address" id="street-address" className="mt-1 mb-8  focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md" />
              <label className=" mr-6 ml-5  label text-gray-9000">City</label>
              <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md" />

            </div>
            <div className="direction">
              <label className=" mr-6 ml-5  label text-gray-900">State / Province</label>
              <input type="text" name="region" id="region" className="mt-1  mb-8 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />

              <label className="mr-6 ml-5 label text-gray-900">ZIP / Postal code</label>
              <input type="text" name="postal-code" id="postal-code" className="mt-1 mb-8  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <div className="direction">
              <label className="ml-5 mr-6  label text-gray-900"> Photo </label>
              <input type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 mb-8   border-gray-300 rounded-md" placeholder="https://www.prueba.com/" />


              <label className="ml-5 mr-6   label text-base text-gray-900">Country</label>
              <select id="country" name="country" className="mt-1  border-gray-900 bg-white rounded-md mb-8   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <button type="submit" className="inline-flex mb-8  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
        </div>

      </form>
    </div>




  )
}