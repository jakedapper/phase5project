import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VenueReviewForm from "./VenueReviewForm"
import VenueItem from "./VenueItem"

function VenueReviews({user, venues}) {
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
        console.log("click")
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
          {displayForm ? <VenueReviewForm user={user} venues={venues}/> : <div></div>}
      </div>
    )
}
export default VenueReviews;