import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import '../index.css';
import Cards from './Carrousel';






export default function Details() {

    const { id } = useParams()




    const dataDetails = data.find(city => city.id === (id))
    console.log(dataDetails)
    return (

        <div className='mainCardContainer'>
            <div className="container">
                <div className="front side">
                    <div className="content">

                        <h1 >{dataDetails.name}</h1>
                        <img className='img-details' src={dataDetails.image} alt="imgcard" />
                        <div>
                        <h1>Population:</h1>
                        <p>{dataDetails.population}  </p>
                      </div>

                    </div>

                </div>
                <div className="back side">
                    <div className="content">
                        <h1>Read More</h1>
                        <p>{dataDetails.description}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )

}