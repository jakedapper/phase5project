import React, {useEffect, useState} from 'react';
import Geocode from "react-geocode";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapContainer({venues}){
  const [mapData, setMapData] = useState({})
  
  let venueAddresses = []

  venues.map((venue) => venueAddresses.push(venue.address))

  console.log(venueAddresses)

  

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
    const defaultCenter = {
      lat: 39.8283, lng: -98.5795
    }

      
    Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
    
  // let mapData = {}
   
  // venueAddresses.map((address) => 
  //   useEffect(()=>{

  //     Geocode.fromAddress(address).then(
  //         (response) => {
  //             let { lat, lng } = response.results[0].geometry.location;
  //             setMapData({lat, lng});
  //             console.log(mapData)
  //         },
  //         (error) => {
  //             console.error(error);
  //     })
  //   }, [])

  

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;