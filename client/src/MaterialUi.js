import React, { Component, useEffect } from 'react';
import Button from '@mui/material/Button';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

let map;
let infowindow;
let service;

function MaterialUi() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b6dc7a9f11mshc3c9c80f93bb8e3p14582djsn410f8593f049',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=41.913872&longitude=-87.662178&limit=30&currency=USD&distance=2&open_now=false&lunit=mi&lang=en_US', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



    return( 
    <div></div>
    )
}

export default MaterialUi