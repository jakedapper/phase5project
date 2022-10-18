import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VenueReviews from "./VenueReviews"
import Home from "./Home"
import LogIn from "./LogIn"
// import VenueReviewForm from "./VenueReviewForm"

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [venues, setVenues] = useState([])
  const [reviews, setReviews] = useState([])
  
  useEffect(()=> {
    setLoading(true);
    fetch("/reviews")
    .then((res) => res.json())
    .then((data) => setReviews(data))
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [user])

  useEffect(()=> {
    setLoading(true);
    fetch("/venues")
    .then((res) => res.json())
    .then((data) => setVenues(data))
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [user])
  
  

    // function handleFormShowClick(){
    //     console.log("click")
    //     if (displayForm === false){
    //         setDisplayForm(true)
    //     }else {
    //         setDisplayForm(false)
    //     }
    // }
    // if (loading) {
    //   return <p>Data is loading...</p>;
    // }
  
    // if (error || !Array.isArray(venues)) {
    //   return <p>There was an error loading your data!</p>;
    // }

  return (
    <div>
      <LogIn user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/venues">
          <VenueReviews user={user} venues={venues}/>
        </Route>
        {/* <Route path="/login"/>
          <LogIn/>
        <Route/> */}
      </Switch>
    </div>
  )
}

export default App;