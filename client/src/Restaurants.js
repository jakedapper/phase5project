import React, { useEffect, useRef, useState } from 'react';
// import Geocode from 'react-geocode';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Restaurants({ locallyStoredVenues, venues }) {
  // const map = useRef();
  const mapDiv = useRef(null)

  const [selectedVenueId, setSelectedVenueId] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState({})
  
  if (venues === []){
    return(<CircularProgress />)
  }   

  let coordinates = {lat:-97, lng:33.33}

  function placesFetch(){

    // let options = {
    //   method: 'GET',
    //   cache: 'default',
    // };
    // const url =
    //   'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' +
    //   'location=' +
    //   coordinates.lat +
    //   ',' +
    //   coordinates.lng +
    //   '&radius=1600&type=restaurant&key=AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY';
  
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((JsonResponse) => {
    //     // console.error(JsonResponse)
    //     console.log(JsonResponse);
    //   })
    //   .catch((error) => {
    //     console.log('error');
    //   });
}
  // let myVenue = 

   let myVenue = venues.find(({id}) => id === selectedVenueId)
    console.log(myVenue)
  
  function handleSelectedVenue(e){
    setSelectedVenueId(e.target.value)
    console.log(selectedVenueId)
    console.log(venues)
    myVenue = venues.find(({id}) => id === selectedVenueId)
    console.log(myVenue)
    // setSelectedVenue(myVenue)

    // placesFetch()
  }



  // let selectedVenue = venues.find((venue) => venue.id === selectedVenueId);

  // Geocode.setApiKey('AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY');

  const mapStyles = {
    height: '80vh',
    width: '100%',
  };

  //// attempt to create a map "manually"
  // useEffect(() => {
  //   console.log('Creating map');
  //   console.log(mapDiv)
  //   if (mapDiv.current) {
  //     const map = new window.google.maps.Map(mapDiv.current, {
  //       zoom: 15,
  //       center: new window.google.maps.LatLng({ lat: -97, lng: 33.33 })
  //     });
  //     console.log(map)
  //     map.current = map
  //   }

  // }, [mapDiv]);

  // useEffect(() => {
  //   if (selectedVenue) {
  //     const { coordinates } = selectedVenue;
  //     console.log('Loading nearby places for ', selectedVenue);
  //     console.log(map);
  //     console.log(window.google.maps.places);
  //     // const service = new window.google.maps.places.PlacesService(map.current);
  //     // console.log(service);
  //     // service.nearbySearch({
  //     //   location: `${coordinates.lat},${coordinates.lng}`,
  //     //   radius: 20,
  //     // });
  //   }
  // }, [selectedVenue]);

  //attempting to use ruby backend to retrieve places data
  // useEffect(() =>{
  //   fetch("/nearby")
  //   // .then((res)=>res.json())
  //   .then((data)=>console.log(data))
  // }, [selectedVenue])

  // if (venues.length === 0) {
  //   return <CircularProgress />;
  // }

  // let venue = venues.find((venue) => venue.name === selectedVenue);

  // let venue

  // useEffect(()=>{
  //   // let coords = selectedVenue.coordinates
  //   // console.log(coords)

  //   // // original methid/attempt - fetch request to google api
  //   // let latitude = coords.lat;
  //   // let longitude = coords.lng;
    
  //   let options = {
  //     method: 'GET',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       Accept: 'application/json',
  //       Origin: 'http://localhost:4000',
  //     },
  //     cache: 'default',
  //   };
  //   const url =
  //     'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' +
  //     'location=' +
  //     selectedVenue.coordinates.lat +
  //     ',' +
  //     selectedVenue.coordinates.lng +
  //     '&radius=1600&type=restaurant&key=AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY';
  
  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((JsonResponse) => {
  //       // console.error(JsonResponse)
  //       console.log(JsonResponse);
  //     })
  //     .catch((error) => {
  //       console.log('error');
  //     });

  // }, [])
  
 


  // fetchPlaces(mapProps, map) {
  //   const {google} = mapProps;
  //   const service = new google.maps.places.PlacesService(map);
  //   // ...
  // }


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
          // bootstrapURLKeys={{
          //   key: '{AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY}',
          //   libraries: ['places', 'directions'],
          // }}
          // ref={map}
          mapContainerStyle={mapStyles}
          zoom={15}
          center={{ lat: 30.2672, lng: -97.7431 }}
          // center = {selectedVenueId ? {lat: myVenue.coordinates.lat, lng: myVenue.coordinates.lng} : { lat: 30.2672, lng: -97.7431 }}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
          
        </GoogleMap>
      </LoadScript>
      
    </Container >
  );
}

export default Restaurants;
