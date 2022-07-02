import NavBar from "./components/NavBar.js";
import './App.css';
import Index from './pages/Index.js';
import "./index.css";
import Footer from './components/Footer.js';
import {Routes,Route} from 'react-router-dom';
import Cities from './pages/cities';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';
import ScrollToTop from "react-scroll-to-top";
import Details from './components/Details';
import {useDispatch} from 'react-redux';
import { useEffect } from "react";
import citiesActions from './actions/citiesActions';
import SingIn from "./components/SingIn"
import SignUp from "./components/SignUp"
import { ToastContainer } from 'react-toastify';
import userActions from "./actions/userActions.js";







function App() {

const dispatch = useDispatch() 
useEffect(() => {
  dispatch (citiesActions.getCities()) 
  if (localStorage.getItem('token') !== null) {
    const token = localStorage.getItem('token')
    console.log(token)
    dispatch(userActions.verifyToken(token))
  }
// eslint-disable-next-line
},[])

  
  
  // eslint-disable-next-line 





  return (
    
   <div className="App">

           <ToastContainer 
             position="bottom-left"
            theme='dark'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>

     <NavBar />
      <Routes>
        <Route path="/"element={<Index/>}/>
        <Route path="/cities"element={<Cities/>}/>
        <Route path="/city/:id"element={<Details/>}/>
        <Route path="/signin"element={<SingIn/>}/>
        <Route path="/signup"element={<SignUp/>}/>
         </Routes> 

         <ScrollToTop className="absolute w-12 h-12 text-black -z-1 right-2" 
        smooth
        component={<ArrowCircleUpIcon />}
      />
         
         <Footer />
       </div>

  );
}

export default App;

