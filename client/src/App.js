import { React, useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"
import './App.css'
import background from './images/background.jpg'

import VenueReviews from "./VenueReviews/VenueReviews"
import SiteHeader from './Header_NavBar/SiteHeader'
import Home from "./Home"
import LogIn from "./Users/LogIn"
import UsersTour from "./TourInfo/UsersTour"
import MapContainer from "./TourInfo/MapContainer"
import Restaurants from "./TourInfo/Restaurants"


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
        .then((user) => {setUser(user)});
      }
    })
    .finally(() => {
      setLoading(false)
    })
    }, [updateUser]);

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
  
  function handleLogOut() {
    fetch ("/logout", 
    { method: "DELETE" })
    .then(setUser(null)) 
      history.push("/")  
    };

  function addNewReview(newReview){
    setReviews(...reviews, newReview)
  }


  function updateCities(newCity){
    setCities([...cities, newCity])
  }

  function updateShows(newShow){
    setShows([...shows, newShow])
  }

  function updateTours(newTour){
    setTours([...tours, newTour])
  }
  function updateVenues(newVenue){
    setVenues([...venues, newVenue]) 
  }

  function deleteShow(e){
    console.log(e.target.id)
    fetch(`/shows/${e.target.id}`, {
        method: 'DELETE',
    })
    .then(fetch('/shows')
            .then((res)=>res.json())
            .then(data=>setShows(data)))
    window.location.reload();
    history.push('/myTour')
    }

  function navToHome () {
    history.push("/")
  }

    
  if (user === null) return <LogIn updateTours={updateTours} user={user} setUser={setUser}/> 
    
    return (
      <Container id="biggestDiv" style={{ backgroundImage: `url(${background})` }}>
        <SiteHeader navToHome={navToHome} handleLogOut={handleLogOut}/>
      {/* <LogIn user={user} setUser={setUser}/> */}
        <Switch>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
          <Route path="/venues">
            <VenueReviews addNewReview={addNewReview} reviews={reviews} user={user} venues={venues}/>
          </Route>
          {/* <Route path="/addNewShow">
              <NewShowForm  setUpdateUser={setUpdateUser} updateShows={updateShows} updateCities={updateCities} updateVenues={updateVenues} user={user} cities={cities} tours={tours}/>
          </Route> */}
          <Route path="/myTour">
            <UsersTour deleteShow={deleteShow} setShows={setShows} venues={venues} user={user} tours={tours}setUpdateUser={setUpdateUser} updateShows={updateShows} updateCities={updateCities} updateVenues={updateVenues} cities={cities} />
          </Route>
          <Route path="/map">
            <MapContainer user={user} venues={venues}/>
          </Route>
          <Route path="/restaurants">
            <Restaurants user={user} venues={venues}/>
          </Route>
          <Route path="/exp">
            <MaterialUi/>
          </Route>
        </Switch>
    </Container >
  )
}

export default App;