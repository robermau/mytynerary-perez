
import { useDispatch } from "react-redux"
import userActions from "../actions/userActions"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import GoogleSignIn from "./GoogleSignIn";
import { useNavigate } from "react-router-dom";






function SignIn() {

  const dispatch = useDispatch()
const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    console.log(event)
    const logedUser = {
      password: event.target[3].value,
      email: event.target[2].value,
      from: "form-Signin",
    }
    const res = await dispatch(userActions.logInUser(logedUser))
    console.log(res)

    if (res.data.success) {
      toast.success(res.data.message)
      navigate('/')
    } else {
      toast.error(res.data.message)
    }
  }





  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-login">
      <div className="flex flex-col items-center justify-center">

        <div className="w-full p-10 mt-16 bg-orange-100 rounded shadow lg:w-1/3 md:w-1/2">
          <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p className="mt-4 text-sm font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none text-gray-800 underline cursor-pointer">
              {" "}
              Sign up here
            </span>
          </p>
          
          <button id='buttonDiv'  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
          <GoogleSignIn className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"></GoogleSignIn>
        
            
           
          </button>
     
          <button aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
            <svg width={24} height={24} viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg" ><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z" /><path fill="#FAFAFA" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" /></svg>
            <p className="ml-4 text-base font-medium text-gray-700">Continue with Facebook</p>
          </button>
          <div className="flex items-center justify-between w-full py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
            <hr className="w-full bg-gray-400 " />
          </div>
          
          <div>
            <label className="text-sm font-medium leading-none text-gray-800">Email</label>
            <input aria-label="enter email adress" name="email" role="input" type="email" className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none" />
          </div>
          <div className="w-full mt-6">
            <label className="text-sm font-medium leading-none text-gray-800">Password</label>
            <div className="relative flex items-center justify-center">
              <input aria-label="enter Password" name="password" role="input" type="password" className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none" />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
             
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                    fill="#71717A"
                  />
                </svg>
               
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button role="button" type="submit" aria-label="create my account" className="w-full py-4 text-sm font-semibold leading-none text-white bg-indigo-700 border rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none hover:bg-indigo-600">
              Create my account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
