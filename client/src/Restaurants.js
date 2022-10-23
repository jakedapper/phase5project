import React, {useState} from 'react'
import Geocode from "react-geocode";
import CircularProgress from "@mui/material/CircularProgress"


import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Restaurants({locallyStoredVenues,venues}){
const API_KEY = process.env.REACT_APP_API_KEY

const [selectedVenue, setSelectedVenue] = useState("Hideout Theater")

if (venues === []){
  return(<CircularProgress />)
}


Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");
    // console.log(venues)
    // console.log(selectedVenue)
    // console.log(locallyStoredVenues[0])

    const mapStyles = {        
        height: "100vh",
        width: "100%"};

    let venue = venues.filter((venue)=> venue.name === selectedVenue)
    let coords = venue[0].coordinates

    
      console.log(coords.lat)
    // let venue
    // let coords

    // async function setCoordinates(){
    // venue = locallyStoredVenues.filter((venue)=> venue.name === selectedVenue)
    // coords = venue[0].coordinates
    // }

  let latitude= coords.lat
  let longitude= coords.lng
  var headers = new Headers({'Access-Control-Allow-Origin': '*'});
  var options = {
    method: 'GET',
    // headers: headers,
    cache: 'default'
    };
  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + 'location=' + latitude + ',' + longitude + '&radius=1600&type=restaurant&key=AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY';
  
  fetch(url, options)
  .then((response) => response.json())
  .then((JsonResponse) => {
      // console.error(JsonResponse)
      console.log(JsonResponse)
  })
  .catch((error) => {
      alert('error')
  });
   


// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


// fetchPlaces(mapProps, map) {
//   const {google} = mapProps;
//   const service = new google.maps.places.PlacesService(map);
//   // ...
// }

  


    return(
        <div>
            <select value={selectedVenue} onChange={(e)=>setSelectedVenue(e.target.value)}>
                {venues.map((venue)=> <option key={venue.id} value={venue.name}>{venue.name}</option>)}
            </select>
            {selectedVenue !== {} ? 
             <LoadScript
             googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
              <GoogleMap
              bootstrapURLKeys={{
                key: '{AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY}',
                libraries: ['places', 'directions']
              }}
                mapContainerStyle={mapStyles}
                zoom={15}
                center={coords}
                onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
              >
            </GoogleMap>
           </LoadScript>
            :
            <></>
            }
        </div>
    )
}

export default Restaurants