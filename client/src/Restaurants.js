import React, { useEffect, useRef, useState } from 'react';
// import Geocode from 'react-geocode';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Restaurants({ locallyStoredVenues, venues }) {

  const [selectedVenueId, setSelectedVenueId] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState({})
  const [toggleCoords, setToggleCoords] = useState(false)
  

  let myVenue 
  useEffect(() =>{
    myVenue = venues.find(({id}) => id == selectedVenueId)
    console.log(myVenue)
    setToggleCoords(!toggleCoords)
  },[selectedVenueId])
  

  if (venues === []){
    return(<CircularProgress />)
  }   

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

  return (
    <Container maxWidth="sm">
      
      <select
        value={selectedVenueId}
        onChange={(e) => handleSelectedVenue(e)}
      >
        {venues.map((venue) => (
          <option key={venue.id} value={venue.id}>{venue.name}</option>
        ))}
      </select>

      {/* <div id='map'></div> */}
      <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={{lat: 30.2672, lng: -97.7431 }}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
        </GoogleMap>
      </LoadScript>
      
    </Container >
  );
  
}

export default Restaurants;
