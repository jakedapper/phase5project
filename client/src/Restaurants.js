import React, { useEffect, useRef, useState } from 'react';
// import Geocode from 'react-geocode';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Rest2 from './Rest2'
import lilHouse from './images/lilHouse.png'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function Restaurants({ locallyStoredVenues, venues, user }) {
  
  // console.log(locallyStoredVenues[0].coordinates)
 
  const [selectedVenueId, setSelectedVenueId] = useState("");
  const [selectedVenue, setSelectedVenue] = useState({})
  const [toggleCoords, setToggleCoords] = useState(true)
  const [fetchResults, setFetchResults]= useState([])
  const [selectedRestaurant,setSelectedRestaurant] = useState(null)
  
  


  useEffect(() =>{
    setTimeout(()=>{
    let myVenue = venues.find(({id}) => id == selectedVenueId)
    console.log(myVenue)
    if(selectedVenue !== {}){
    setSelectedVenue(myVenue)
    }}, 2000)
    // setToggleCoords(!toggleCoords)
  },[selectedVenueId])

  // useEffect(()=>{
  //   console.log("okokokok")
  // },[toggleCoords])
  let results = []
  
  //turn into async await function
    // map over results and push coordinates into array or set to a state
    //OR
    // map over and create Makers for each? would prefer to do this is JSX - have a saved data object to map
    // (cont) over and create a marker like in map Container
    // -- could set return condition to include this marker data state as well 
  
    //state of selected venue is not set quick enough even though
    //(cont) its initialized as {}, JS/React see this condition and
    //(cont) are like oh yea that's true let's run the code

    // async function getRestaurants(){
    //   // if (selectedVenue !== {}) {
    //   setTimeout(async ()=>{
    //   setFetchResults([])
    //   const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'b6dc7a9f11mshc3c9c80f93bb8e3p14582djsn410f8593f049',
    //             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    //         }
    //       };

    //   const res = await fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${selectedVenue.coordinates.lat}&longitude=${selectedVenue.coordinates.lng}&limit=30&currency=USD&distance=2&open_now=false&lunit=mi&lang=en_US`, options)
    //   const results = await res.json()
    //   console.log(results.data)
    //   console.log("before push:", fetchResults)
    //   fetchResults.push(results)
    //   console.log("after push:", fetchResults)
    // }, "3000")
    // }else{
    //   console.log("didnt run")
    // }
    

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
      .then((data)=>setFetchResults(data.data))

      console.log("inside function", fetchResults)
    }, "0000")
    }
    console.log(fetchResults)

    // // const selectedVenueExists = selectedVenue === {}
    
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

//   let iconMarker = new window.google.maps.MarkerImage(
//     "https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300",
//     new window.google.maps.Size(32, 32)
// );

  // add this conditional to return:  && fetchResults.length !== 0
  return fetchResults.length > 0 ? (
    
    <Container id="restaurantMapsContainer" maxWidth="sm">
      <Select
        id="venueSelector"
        variant="filled"
        value={selectedVenueId}
        onChange={(e) => handleSelectedVenue(e)}
      >
        <MenuItem value="">---Select A Venue Below---</MenuItem>
        {user.shows.map((show) => (
          <MenuItem key={show.id} value={show.id}>{show.city_name}</MenuItem>
        ))}
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
  (<Container maxWidth="sm">
  <Select
    id="venueSelector"
    variant="filled"
    value={selectedVenueId}
    onChange={(e) => handleSelectedVenue(e)}
  >
    <MenuItem value="">---Select A Venue Below---</MenuItem>
    {user.shows.map((venue) => (
      <MenuItem key={venue.id} value={venue.id}>{user.shows.city_name}</MenuItem>
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
</Container>)
  
}

export default Restaurants;
