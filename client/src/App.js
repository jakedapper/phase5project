import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import VenueReviews from "./VenueReviews"
import SiteHeader from './SiteHeader'
import Home from "./Home"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
import NewShowForm from "./NewShowForm"
import UsersTour from "./UsersTour"
import MapContainer from "./MapContainer"
import Restaurants from "./Restaurants"
import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"
import './App.css'
// import VenueReviewForm from "./VenueReviewForm"



// export const UserContext = React.createContext()

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [venues, setVenues] = useState([])
  const [reviews, setReviews] = useState([])
  const [tours, setTours] = useState([])
  const [cities, setCities] = useState([])
  const [shows, setShows] = useState([])
  const [updateUser, _setUpdateUser] = useState(false)
  
  let history = useHistory();

  // useEffect(() => {
  //   fetch("/nearby")
  //   .then((res)=> res.json())
  //   .then((coords) => console.log(coords))
  // }, [])
  function setUpdateUser(){
    _setUpdateUser(previousState => !previousState)
  }

  useEffect(() => {
    // auto-login
    setLoading(true);
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {setUser(user)
        });
      }
    })
    .finally(() => {
      setLoading(false)
    })
    }, [updateUser]);

  let userVar = user
  // console.log(user.shows)
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
    fetch("/shows")
    .then((res) => res.json())
    .then((data) => setShows(data))
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
  }, [user, reviews])

  useEffect(()=> {
    setLoading(true);
    fetch(`/tours/`)
    .then((res) => res.json())
    .then((data) => setTours(data))
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [user, shows])
  
  useEffect(()=> {
    setLoading(true);
    fetch("/cities")
    .then((res) => res.json())
    .then((data) => setCities(data))
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [user])
 
  function addNewReview(newReview){
    setReviews(...reviews, newReview)
  }

  function handleLogOut() {
    fetch ("/logout", 
    { method: "DELETE" })
    .then(setUser(null)) 
      history.push("/")  
    };

    function updateCities(newCity){
      setCities([...cities, newCity])
    }

    function updateShows(newShow){
      setShows([...shows, newShow])
    }

    function updateTours(newTour){
      setTours([...tours, newTour])
    }

    let locallyStoredVenues = []
    locallyStoredVenues = venues
    function updateVenues(newVenue){
      setVenues([...venues, newVenue])
      locallyStoredVenues.push(newVenue); 
    }
  // console.log(locallyStoredVenues)
    
  if (user === null) return <LogIn updateTours={updateTours} user={user} setUser={setUser}/> 
    
    return (
      <div fixed>
        <SiteHeader handleLogOut={handleLogOut}/>
      {/* <LogIn user={user} setUser={setUser}/> */}
      <Switch>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route path="/venues">
          <VenueReviews addNewReview={addNewReview} reviews={reviews} user={user} venues={venues}/>
        </Route>
        <Route path="/addNewShow">
            <NewShowForm  setUpdateUser={setUpdateUser} updateShows={updateShows} updateCities={updateCities} updateVenues={updateVenues} user={user} cities={cities} tours={tours}/>
        </Route>
        <Route path="/myTour">
          <UsersTour venues={venues} user={user} tours={tours}/>
        </Route>
        <Route path="/map">
          <MapContainer user={user} venues={venues}/>
        </Route>
        <Route path="/restaurants">
          <Restaurants locallyStoredVenues={locallyStoredVenues} venues={venues}/>
        </Route>
        <Route path="/exp">
          <MaterialUi/>
        </Route>

      </Switch>
    </div >
  )
}

export default App;