import Carrousel from '../components/Carrousel';
import { Link as LinkRouter } from 'react-router-dom';


const navigation = [

  { name: "Cities", to: "/cities", current: false },
  ,
];

export default function Index() {
  return (
    <main className="mainContainer">


      <div className="main">
        <img className="logo" src="https://imge.cloud/images/2022/06/07/rKUUz8.png"
          alt="logoportada"
        />
        <p className="textMain main_div" >
          "Find
          your perfect trip, designed by insiders who know and love
          their cities!".
        </p>

      </div>
  
      <div className="sencond-banner">
      
      {navigation.map((item) => (
          <LinkRouter to={item.to} key={item.name}> <section className="relative flex flex-col items-center justify-center w-screen px-3 py-0 text-center text-white h-96">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden video-docker">
                <video className="absolute object-cover min-w-full min-h-full " src="https://egypt.travel/media/2428/thesphinxavenue.mp4" type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="space-y-2 video-content">
                <h1 className="text-6xl font-light">Wellcome!! to travel Ancient Egypt</h1>
                <h3 className="text-3xl font-light">click here for know a few</h3>
            </div>
        </section>
          </LinkRouter>
         
        ))}
         
         <Carrousel />
     
        
        
      </div>
    

    </main>
  )
}
