import React, { useEffect, useRef, useState } from 'react';
// import Geocode from 'react-geocode';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"
import Rest2 from './Rest2'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Restaurants({ locallyStoredVenues, venues }) {

  const [selectedVenueId, setSelectedVenueId] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState({
    "id": 1,
    "name": "Hideout Theater",
    "address": "1354 W Wabansia Ave, Chicago, IL 60642",
    "city_id": 1,
    "coordinates": {
    "lat": 41.913872,
    "lng": -87.662178
    }
    })
  const [toggleCoords, setToggleCoords] = useState(true)
  
  console.log(selectedVenue)
   
  useEffect(() =>{
    let myVenue = venues.find(({id}) => id == selectedVenueId)
    console.log(myVenue)
    setSelectedVenue(myVenue)
    setToggleCoords(!toggleCoords)
  },[selectedVenueId])

  useEffect(()=>{
    console.log("okokokok")
  },[toggleCoords])

  if (venues === []){
    return(<CircularProgress />)
  }   

  let trueCoords

  // if (toggleCoords){
  //   trueCoords={lat: 30.2672, lng: -97.7431 }
  // }else{
  //   trueCoords={lat: myVenue.coordinates.lat, lng: myVenue.coordinates.lng} 
  // }
  
  // toggleCoords ?  trueCoords = {lat: 30.2672, lng: -97.7431} : trueCoords = {lat: myVenue.coordinates.lat, lng: myVenue.coordinates.lng} 

  // let coordinates = {lat:-97, lng:33.33}
  
  function handleSelectedVenue(e){
    setSelectedVenueId(e.target.value)
    console.log(selectedVenueId)
    // console.log(venues)
    // setSelectedVenue(myVenue)
    
  }
 
  const mapStyles = {
    height: '80vh',
    width: '100%',
  };

  return selectedVenue ? (
    
    <Container maxWidth="sm">
      <select
        value={selectedVenueId}
        onChange={(e) => handleSelectedVenue(e)}
      >
        {venues.map((venue) => (
          <option key={venue.id} value={venue.id}>{venue.name}</option>
        ))}
      </select>
      <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={selectedVenue.coordinates}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
        </GoogleMap>
      </LoadScript>
    </Container>
  ) :
  (<Container maxWidth="sm">
  <select
    value={selectedVenueId}
    onChange={(e) => handleSelectedVenue(e)}
  >
    {venues.map((venue) => (
      <option key={venue.id} value={venue.id}>{venue.name}</option>
    ))}
  </select>
  <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={15}
      center={{
        "lat": 41.913872,
        "lng": -87.662178
        }}
      onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
    >
    </GoogleMap>
  </LoadScript>
</Container>)
  
}

export default Restaurants;
