import React, {useEffect, useState} from 'react';
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function MapContainer({user, venues}){
  const API_KEY = process.env.REACT_APP_API_KEY
  Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
  console.log(API_KEY)

  // const [venueCoordinates, setVenueCoordinates] = useState({})
  const [coordinateArray, setCoordinateArray] = useState([])
  const [selectedShow, setSelectedShow] = useState(null)
  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
    const defaultCenter = {
      lat: 39.8283, lng: -98.5795
    }

    user.shows.map((show)=> console.log(show.venue_coordinates))
    
    function handleCloseClick(){
      setSelectedShow(null)
    }

    function handleSelectedShow(marker){
      setSelectedShow(marker)
  }

  return (
      <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={4.3}
          center={defaultCenter}
        >
          {user && user.shows.map((show)=> 
            <div>
              <Marker key={show.id} onClick={()=>handleSelectedShow(show)} position={show.venue_coordinates}/>
            </div>
          )}
          {selectedShow &&  
            <div>
                <InfoWindow value={selectedShow.id} key={selectedShow.id} onCloseClick={handleCloseClick} position={selectedShow.venue_coordinates}>
                  <div>
                    <h2>{selectedShow.city_name}</h2>
                    <h2>{selectedShow.date}</h2>
                    <h2>Doors: {selectedShow.doors_time}</h2>
                    <h2>SoundCheck: {selectedShow.soundcheck_time}</h2>
                    <h2>Set Time: {selectedShow.soundcheck_time}</h2>
                  </div>
                </InfoWindow>
            </div>
          }
          
          
        </GoogleMap>
      </LoadScript>
  )
}

export default MapContainer;