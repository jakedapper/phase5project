import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VenueReviewForm from "./VenueReviewForm"
import VenueItem from "./VenueItem"
import CircularProgress from "@mui/material/CircularProgress"

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
      <div>
          <h3> hello venue reviews coming soon</h3>
          {venues.map((venue) => <VenueItem venue={venue}/>)}
          <button onClick={handleFormShowClick}>Leave A Review?</button>
          {displayForm ? <VenueReviewForm addNewReview={addNewReview} user={user} venues={venues}/> : <div></div>}
      </div>
    )
}
export default VenueReviews;