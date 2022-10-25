import React, {useEffect, useState} from 'react';
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapContainer({user, venues}){
  const API_KEY = process.env.REACT_APP_API_KEY
  Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
  console.log(API_KEY)

  // const [venueCoordinates, setVenueCoordinates] = useState({})
  const [coordinateArray, setCoordinateArray] = useState([])
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
    const defaultCenter = {
      lat: 39.8283, lng: -98.5795
    }

    user.shows.map((show)=> console.log(show.venue_coordinates))
 
  return (
      <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={4.3}
          center={defaultCenter}
        >
          {user && user.shows.map((show)=> 
            <Marker key={show.id} position={show.venue_coordinates}/>
          )}
        </GoogleMap>
      </LoadScript>
  )
}

export default MapContainer;