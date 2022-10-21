import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import VenueReviews from "./VenueReviews"
import Home from "./Home"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
import NewShowForm from "./NewShowForm"
import UsersTour from "./UsersTour"
import MapContainer from "./MapContainer"
import Restaurants from "./Restaurants"
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
  
  let history = useHistory();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);
  let userVar = user
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
  }, [])
 
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

    function updateVenues(newVenue){
      setVenues([...venues, newVenue])
    }
    
    return (
      <div>
      {/* <LogIn user={user} setUser={setUser}/> */}
      {!user ? <LogIn user={user} setUser={setUser}/> : <LogOut handleLogOut={handleLogOut}/>}
      <Switch>
        <Route exact path="/">
          <Home userVar={userVar}/>
        </Route>
        <Route path="/venues">
          <VenueReviews addNewReview={addNewReview} user={user} venues={venues}/>
        </Route>
        <Route path="/addNewShow">
            <NewShowForm updateShows={updateShows} updateCities={updateCities} updateVenues={updateVenues} user={user} cities={cities} tours={tours}/>
        </Route>
        <Route path="/myTour">
          <UsersTour venues={venues} user={user} tours={tours}/>
        </Route>
        <Route path="/map">
          <MapContainer user={user} venues={venues}/>
        </Route>
        <Route path="/restaurants">
          <Restaurants venues={venues}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;