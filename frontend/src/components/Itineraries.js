import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import itinerariesActions from "../actions/itinerariesActions";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import commentaryActions from '../actions/commentaryActions';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



export default function Itineraries({ id }) {

  const [itinerary, setItinerary] = useState([])
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()

  const user = useSelector(state => state.usersReducers.user)
  const oneItinerary= useSelector(state =>state.itinerariesReducer.getOneItineraries)
 
  
  const [likes, setLike] = useState([])
  const [edit, setEdit] = useState("")

  // console.log(itinerary)

  useEffect(() => {

    getItineraries()
  }, [reload])
  // console.log(likes)
  async function getItineraries() {

    const data = await dispatch(itinerariesActions.findItinerariesFromCity(id))
    setItinerary(data)
    // console.log(data.data.response)
    setLike(data.data.response)

  }

  async function likeandDislike(_id) {
    // console.log(_id)
    let res= await dispatch(itinerariesActions.likeDislike(_id))

    setReload(!reload)
    if (res.data.success) {
      toast.success(res.data.message)
  } else {
      toast.error(res.data.message);
  }


  }

 async function handleDelete (id) {

    let res = await dispatch(commentaryActions.deleteComment(id))
    
    
   setReload(!reload)


   if (res.data.success) {
    toast.success(res.data.message)
} else {
    toast.error(res.data.message);
}
 }


 async function handleModifyComment (id) {
  
 const commentData = {
  commentId:id,
  comment:edit
 }

 let res= await dispatch(commentaryActions.modifyComment(commentData))
setReload(!reload)


if (res.data.success) {
  toast.success(res.data.message)
} else {
  toast.error(res.data.message);
}
 }

  async function handleSubmit(id) {

    const comment = {
        itineraryId:id,
        comment: edit
    }

    let res = await dispatch(commentaryActions.addComment(comment))
    setReload(!reload)

    if (res.data.success) {
      toast.success(res.data.message)
  } else {
      toast.error(res.data.message);
  }

}
  const comment = likes.map(d => d.comments)



  return (
    <>

      {likes.map((e,index) =>

        <div key={index} className="bg-white container-itinerary radius">
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


            {user ?
            
              (<div onClick={() => likeandDislike(e?._id)}>  {e.likes.includes(user.id) ?
                <span className="material-icons" style={{ color: "red", fontSize: 30 }}>favorite</span> :
                <span className="material-icons" style={{ color: "red", fontSize: 30 }} >favorite_border</span>}</div>)
              : (<span style={{ fontSize: 30 }} className="material-icons">favorite_border</span>)
            }

            {e.likes.length}


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
              ))}

            </AccordionDetails>
            <div style={{ padding: 14 }} className="App">
                                            <h3>Comments</h3>

                                            {e.comments.map((com,index) =>

                                                <Paper key={index} style={{ padding: "40px 20px" }}>
                                                    <Grid container wrap="nowrap">
                                                        <Grid item>
                                                            <Avatar alt="Remy Sharp" src={com.imageUser} />
                                                            <p>{com.firstName}</p>
                                                        </Grid>
                                                     
                                                        <Grid container  justifyContent="space-around" alignItems='center' item xs zeroMinWidth>
                                                            <h4 style={{ margin: 0, textAlign: "left" }}>{""}</h4>
                                                            
                                                         <p  onInput={(event)=> setEdit(event.currentTarget.textContent)} suppressContentEditableWarning  contentEditable>{com.comment}</p>
                                            
                                                            {com?.userid == user?.id ?  (<>
                                                            <span  onClick={()=>handleDelete(com._id)} type="submit" className="material-symbols-outlined">
                                                                delete_sweep
                                                            </span>
                                                            <span  onClick={()=>handleModifyComment(com._id)}className="material-symbols-outlined">
                                                                edit
                                                            </span></>) :(null)}


                                                        </Grid>
                                                    </Grid>
                                                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                                                </Paper>
                                                   )}
                                                </div>

            <div className="flex items-center justify-center bg-gray-800 textArea">

              <div className="w-full p-2 pt-4 bg-white rounded shadow-lg textArea">
                <div className="flex ml-3">
                  <div className="mr-3">
                    <img src={user?.imageUser} alt="" className="rounded-full" />

                  </div>
                  <div>
                    <h1 className="font-semibold"></h1>
                    <p className="text-lg text-white ">Leave here you comment</p>
                  </div>

                </div>

                <div  className="w-full p-3 mt-3">

                  <textarea onInput={(event)=> setEdit(event.target.value)}  rows="3" className="w-full p-2 border rounded" placeholder="Write something..."></textarea>
                </div>

                <div className="flex justify-between mx-3  border-btn">
                  <div><button onClick={()=>handleSubmit(e._id)} type="submit" className="px-4 py-1 font-light text-white bg-gray-800 rounded border-btn hover:bg-gray-700">Submit</button></div>
                </div>
              </div>
            </div>
          </Accordion>
        </div>

      )

      }
    </>


  )





}

