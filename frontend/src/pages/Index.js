import Carrousel from '../components/Carrousel';
import { Link as LinkRouter } from 'react-router-dom';


const navigation = [

  { name: "Cities", to: "/cities", current: false },
  ,
];

export default function Index() {
  return (
    <main className="mainContainer">


      <div className="main ">
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
        <h1> Discover stories, Travel in time </h1>
        <h2> If you want to travel in the time </h2>
        {navigation.map((item) => (
          <LinkRouter to={item.to} key={item.name}
            className='callToAction'> TRAVEL HERE!!
          </LinkRouter>
        ))}
        <h3>POPULAR MYTINERARY</h3>
        <Carrousel />

      </div>


    </main>
  )
}
