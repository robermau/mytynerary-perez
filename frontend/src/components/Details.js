import React from 'react';
import { useParams } from 'react-router-dom';



export default function Details() {
    const { id } = useParams()
  
    return (

   <h1>asdasdasdd {id}</h1>
        
    )

}