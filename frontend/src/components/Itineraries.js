import { BsHandThumbsUp } from "react-icons/bs"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import citiesActions from "../actions/citiesActions";
import itinerariesActions from "../actions/itinerariesActions";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";


export default function Itineraries({ id }) {
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()

  const user = useSelector(state => state.usersReducers.user)
  const [likes, setLike] = useState([])

 

  useEffect(() => {
    console.log(likes)
    getItineraries()
  }, [reload])

  async function getItineraries(){
    const data =  await dispatch(itinerariesActions.findItinerariesFromCity(id))
    console.log(data.data.response)
     setLike(data.data.response)
    
  }

  async function likeandDislike(_id) {
    console.log(_id)
    await dispatch(itinerariesActions.likeDislike(_id))

    // await dispatch(citiesActions.getOneCity())

    setReload(!reload)
  }



  return (
    <>

      {likes.length > 0 && likes.map(e =>

        <div key={e._id} className="bg-white container-itinerary radius">
          <div className="w-full text-center rounded-3xl ">
            <h2 className="text-5xl itinerary">{e.nameItinerary}</h2>
          </div>
          <div className="flex flex-col items-center rounded-3xl">
            <img
              className="w-24 rounded-full h-30 ring-2 ring-white"
              src={e.imagePerson}
              alt=""
            />
          </div>
          {e.namePerson}


          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">

          </p>

          <p className="max-w-2xl text-xl text-gray-900 lg:mx-auto"> Price:{e.precie}</p>

          <p className="max-w-2xl text-xl text-gray-900 lg:mx-auto">Duration:{e.duration}</p>
          <div className="svg-like">
            <button onClick={() => likeandDislike(e._id)}>like</button>
            {e.likes.length}
            <BsHandThumbsUp />

          </div>
          <p className="max-w-2xl mt-1 text-xl text-gray-900 lg:mx-auto">
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

              {e.activitys?.map((activity, index) =>
              (<div className="activitys" key={index}>
                <div className="container-activity">
                  <p className="font-activity">{activity.nameActivity}</p>
                  <img className="image-activity" src={activity.imageActivity} />
                </div>
              </div>
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

