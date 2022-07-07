import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
 import axios from 'axios';
import {useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Itineraries from '../components/Itineraries';
import { useDispatch,useSelector  } from 'react-redux';
import citiesActions from '../actions/citiesActions';
import itinerariesActions from '../actions/itinerariesActions.js';





const navigation = [
    { name: <p className="btn-back">Back to Cities</p>, to: "/cities", current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



export default function Details() {

    const { id } = useParams()
    console.log(id)
    //  const [city, setCity] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(citiesActions.getOneCity(id))
        dispatch(itinerariesActions.findItinerariesFromCity(id))
       
// eslint-disable-next-line
    }, [id])
  const city =  useSelector (store => store.citiesReducers.oneCity)
  console.log(city)
  const itineraries= useSelector(store=>store.itinerariesReducer.getItinerariesFromCity)
 console.log(itineraries)

    return (
        <div className='mainCardContainer'>
       
      { itineraries.length > 0 ? <Itineraries data={itineraries} id={id} /> : <h1 className='font-activity'>Dont found Itineraries </h1> }
            
            <div className="container">
                <div className="front side">
                    <div className="content">
                        <h1 >{city.name}</h1>
                        <img className='img-details' src={city.image} alt="imgcard" />
                        <div><h1>Population:</h1>
                            <p>{city.population}  </p>
                        </div>
                    </div>
                </div>
                <div className="back side">
                    <div className="content">
                        <h1>Read More</h1>
                        <p>{city.description}</p>
                    </div>
                    {navigation.map((item) => (
                        <LinkRouter to={item.to} key={item.name}
                            className={classNames(
                            )} aria-current={item.current ? "page" : undefined}> {item.name}
                        </LinkRouter>))}

                </div>
               
            </div> 
   </div>
            
       
        
    )


}

