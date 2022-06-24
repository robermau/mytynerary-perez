import { BsHandThumbsUp } from "react-icons/bs"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Itineraries({data}) {

console.log(data)

  return (
    <>
    {
     data.map(e =>    
     
    <div key={e._id}  className="container-itinerary  radius  bg-white">
      <div className="text-center w-full rounded-3xl   ">
        <h2 className="itinerary  text-5xl">{e.nameItinerary}</h2>
      </div>
      <div className=" rounded-3xl flex flex-col items-center">
        <img
          className="h-30 w-24 rounded-full ring-2 ring-white"
          src={e.imagePerson}
          alt=""
        />
      </div>
      {e.namePerson}


      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      
      </p>

      <p className=" max-w-2xl text-xl text-gray-900 lg:mx-auto"> Price:{e.precie}</p>

      <p className=" max-w-2xl text-xl text-gray-900 lg:mx-auto">Duration:{e.duration}</p>
      <div className="svg-like">
    <BsHandThumbsUp />
        {e.likes}
      </div>
      <p className="mt-1 max-w-2xl text-xl text-gray-900 lg:mx-auto">
           {e.hashtags}
      </p>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <p className="font-activity container-activity">More Info</p>
        </AccordionSummary>
        <AccordionDetails >
         
            {e.activitys.map ((activity,index) => 
              (
              <div className="activitys" key={index}> <div className="container-activity"> <p className="font-activity">{activity.nameActivity}</p> <img className="image-activity" src={activity.imageActivity} /></div></div>
              ) 
                
              
              )}
          
         
        </AccordionDetails>
      </Accordion>
    </div>
    
) 

}
</>







  )
}