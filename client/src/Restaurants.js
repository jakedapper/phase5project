import React, {useState} from 'react'
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Restaurants({venues}){
const [selectedVenue, setSelectedVenue] = useState({})

Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
    console.log(venues)
    console.log(selectedVenue)

    const mapStyles = {        
        height: "100vh",
        width: "100%"};

    if (selectedVenue) {    
    let venue = venues.filter((venue)=> venue.name === selectedVenue)
    let coords = venue[0].coordinates
    }

    return(
        <div>
            <select value={selectedVenue} onChange={(e)=>setSelectedVenue(e.target.value)}>
                {venues.map((venue)=> <option key={venue.id} value={venue.name}>{venue.name}</option>)}
            </select>
            {/* {selectedVenue ? 
             <LoadScript
             googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={5}
                center={coords}
              >
            </GoogleMap>
           </LoadScript>
            :
            <></>
            } */}
        </div>
    )
}

export default Restaurants