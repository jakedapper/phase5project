import React from 'react';
import Geocode from "react-geocode";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  

    let defaultCenter = {
        lat: 41.9138993, lng: -87.66260109999999
      }
    Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
    
    Geocode.fromAddress("1354 W Wabansia Ave, Chicago, IL 60642").then(
        (response) => {
            let { lat, lng } = response.results[0].geometry.location;
            // let defaultCenter = {
            //     lat: lat, lng: lng
            //   }
            console.log(lat, lng);
        },
        (error) => {
            console.error(error);
        })

   
    

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