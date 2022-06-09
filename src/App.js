import NavBar from "./components/NavBar.js";
import './App.css';
import Index from './pages/Index.js';
import "./index.css";
import Footer from './components/Footer.js';
import {Routes,Route} from 'react-router-dom';
import Cities from './pages/cities';




function App() {
  return (
    
   <div className="App">
     <NavBar />
      <Routes>
        <Route path="/"element={<Index/>}/>
        <Route path="/cities"element={<Cities/>}/>
         </Routes> 
         
      <Footer />
      
     </div>

  );
}

export default App;

