import React, { useEffect, useRef, useState } from 'react';
// import Geocode from 'react-geocode';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialUi from "../MaterialUi";
import Container from "@mui/material/Container"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function Restaurants({venues, user }) {
 
  const [selectedVenueId, setSelectedVenueId] = useState("");
  const [selectedVenue, setSelectedVenue] = useState({})
  const [toggleCoords, setToggleCoords] = useState(true)
  const [fetchResults, setFetchResults]= useState([])
  const [selectedRestaurant,setSelectedRestaurant] = useState(null)
  
  useEffect(() =>{
    setTimeout(()=>{
    let myVenue = venues.find(({id}) => id == selectedVenueId)
    if(selectedVenue !== {}){
    setSelectedVenue(myVenue)
    }}, 2000)
  },[selectedVenueId])
    

  function getRestaurants(){
    setTimeout(() =>{
    setFetchResults([])
    
    const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'b6dc7a9f11mshc3c9c80f93bb8e3p14582djsn410f8593f049',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
    
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${selectedVenue.coordinates.lat}&longitude=${selectedVenue.coordinates.lng}&limit=15&currency=USD&distance=2&open_now=false&lunit=mi&lang=en_US`, options)
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((food)=>setFetchResults(food.data))

    console.log("inside function", fetchResults)
  }, "0000")
  }
 
    useEffect(()=>{
      if(selectedVenue !== undefined || {}){
      setTimeout(()=>{
      getRestaurants()
      }, "0000")
      }
    }, [selectedVenue])

  
  if (venues === []){
    return(<CircularProgress />)
  }   

  function handleSelectedVenue(e){
    setSelectedVenueId(e.target.value)
    console.log(selectedVenueId)
  }
 
  function handleSelectedRestaurant(rest){
      setSelectedRestaurant(rest)
  }
  console.log(selectedRestaurant)

  function handleCloseClick(){
    setSelectedRestaurant(null)
  }

  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

user.shows.map((show) => console.log(show.city_name))

  return fetchResults.length > 0 ? 
  (
    <Container id="restaurantMapsContainer" maxWidth="sm">
      <Select
        id="venueSelector"
        variant="filled"
        value={selectedVenueId}
        onChange={(e) => handleSelectedVenue(e)}
      >
        <MenuItem class="venue-menu-item" value="">---Select A Venue Below---</MenuItem>
        {user.shows.map((show) => (
          <MenuItem class="venue-menu-item" key={show.id} value={show.id}>{show.city_name}</MenuItem>
          )
        )}
      </Select>
      <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13.8}
          center={selectedVenue.coordinates}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
        <Marker  key={1} position={selectedVenue.coordinates}/>
        {fetchResults.map((restaurant)=>
          <Marker onClick={()=>handleSelectedRestaurant(restaurant)} key={restaurant.name} position={{"lat": parseFloat(restaurant.latitude), "lng": parseFloat(restaurant.longitude)}}/>
        )}
        {selectedRestaurant && 
          <InfoWindow onCloseClick={handleCloseClick} position={{"lat": parseFloat(selectedRestaurant.latitude), "lng": parseFloat(selectedRestaurant.longitude)}}>
            <div>
            <h2>{selectedRestaurant.name}</h2>
            <h2>{selectedRestaurant.address}</h2>
            <h2>{selectedRestaurant.open_now_text}</h2>
            </div>
          </InfoWindow>}
        </GoogleMap>
      </LoadScript>
    </Container>
  ) :
  (
    <Container maxWidth="sm">
    <Select
      id="venueSelector"
      variant="filled"
      value={selectedVenueId}
      onChange={(e) => handleSelectedVenue(e)}
    >
      <MenuItem class="venue-menu-item" value="">---Select A Venue Below---</MenuItem>
      {user.shows.map((show) => (
        <MenuItem key={show.id} value={show.id}>{show.city_name}</MenuItem>
      ))}
    </Select>
    <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4}
        center={{
          "lat": 39.8283,
          "lng": -98.5795
          }}
        onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
      >
      </GoogleMap>
    </LoadScript>
  </Container>
)
  
}

export default Restaurants;
