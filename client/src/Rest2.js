import React, { useEffect, useRef, useState } from 'react';
// import Geocode from 'react-geocode';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialUi from "./MaterialUi";
import Container from "@mui/material/Container"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Rest2({ locallyStoredVenues, venues }) {
    const mapStyles = {
        height: '80vh',
        width: '100%',
      };
 return (
    <LoadScript googleMapsApiKey='AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={{lat: 30.2672, lng: -97.7431 }}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
        </GoogleMap>
    </LoadScript>
 )
 }

export default Rest2;