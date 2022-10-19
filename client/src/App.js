import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import VenueReviews from "./VenueReviews"
import Home from "./Home"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
import NewShowForm from "./NewShowForm"
import UsersTour from "./UsersTour"
import MapContainer from "./MapContainer"
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
  }, [reviews])

  useEffect(()=> {
    setLoading(true);
    fetch(`/tours/1`)
    .then((res) => res.json())
    .then((data) => setTours(data))
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  console.log(tours)

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
      {/* <LogIn user={user} setUser={setUser}/> */}
      {!user ? <LogIn user={user} setUser={setUser}/> : <LogOut handleLogOut={handleLogOut}/>}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/venues">
          <VenueReviews addNewReview={addNewReview} user={user} venues={venues}/>
        </Route>
        <Route path="/addNewShow">
            <NewShowForm cities={cities} tours={tours}/>
        </Route>
        <Route path="/myTour">
          <UsersTour tours={tours}/>
        </Route>
        <Route path="/map">
            <MapContainer/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;