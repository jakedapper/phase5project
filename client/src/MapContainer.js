import React, {useEffect, useState} from 'react';
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapContainer({user, venues}){
  // const [venueCoordinates, setVenueCoordinates] = useState({})
  const [coordinateArray, setCoordinateArray] = useState([])
  
  Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
  
  

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
    const defaultCenter = {
      lat: 39.8283, lng: -98.5795
    }

   
  
  // useEffect(()=>{
  //   Geocode.fromAddress("1354 W Wabansia Ave, Chicago, IL 60642").then(
  //       (response) => {
  //           let { lat, lng } = response.results[0].geometry.location;
  //           setVenueCoordinates({lat, lng});
  //           console.log("inside geocode:", venueCoordinates)
  //           let mapDataClone  = venueCoordinates
  //           console.log(mapDataClone)
  //           coordinateArray.push(venueCoordinates)
  //           console.log("coordinate array:",coordinateArray)
  //       },
  //       (error) => {
  //           console.error(error);
  //   })
  // }, [user])
  // console.log(venueCoordinates) 

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
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