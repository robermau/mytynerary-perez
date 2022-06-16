import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';



const navigation = [
    { name: <p className="btn-back">Back to Cities</p>, to: "/cities", current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



export default function Details() {

    const { id } = useParams()
    const [city, setCity] = useState({})

    useEffect(() => {

        axios.get(`http://localhost:4000/api/cities/${id}`)
            .then(response => setCity(response.data.response))

    }, [])

    return (
        <div className='mainCardContainer'>
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

