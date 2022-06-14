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





function App() {

  return (
    
   <div className="App">
     <NavBar />
      <Routes>
        <Route path="/"element={<Index/>}/>
        <Route path="/cities"element={<Cities/>}/>
        <Route path="/city/:id"element={<Details/>}/>
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

