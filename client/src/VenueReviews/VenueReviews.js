import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VenueReviewForm from "./VenueReviewForm"
import VenueItem from "./VenueItem"
import CircularProgress from "@mui/material/CircularProgress"
import Button from "@mui/material/Button"

function VenueReviews({user, venues, addNewReview}) {
  const [displayForm, setDisplayForm] = useState(false)
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [venues, setVenues] = useState(null)
  
//   useEffect(()=> {
//     setLoading(true);
//     fetch("/venues")
//     .then((res) => res.json())
//     .then((data) => setVenues(data))
//     .catch((err) => {
//       setError(err)
//     })
//     .finally(() => {
//       setLoading(false)
//     })
//   }, [])


    function handleFormShowClick(){
       
      if (user === null || venues === []){
        return(<CircularProgress />)
      }

        if (displayForm === false){
            setDisplayForm(true)
        }else {
            setDisplayForm(false)
      }
    }
 

    return (
      <div id="biggerReviewDiv">
        <div id='reviewDiv'>
            {venues.map((venue) => <VenueItem user={user} key={venue.id} venue={venue}/>)}
        </div>
            <Button id="formButton" variant="contained" onClick={handleFormShowClick}>Leave A Review?</Button>
            {displayForm ? <VenueReviewForm id="reviewForm" addNewReview={addNewReview} user={user} venues={venues}/> : <div></div>}
      </div>
    )
}
export default VenueReviews;