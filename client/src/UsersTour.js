import React, {useState} from 'react';
import MapContainer from "./MapContainer"
import CircularProgress from "@mui/material/CircularProgress"
import Card from "@mui/material/Card"
import Grid from '@mui/material/Grid';

function UsersTour({user, venues, tours}) {
    
    // if (user === null){
    //     return(<CircularProgress />)
    // }
    console.log(user.shows)
    let shows = user.shows
    // let cities = tours.cities
    // console.log(shows)
    // console.log(shows.city_name)
    let cardStyle = {
        
        width: '30vw',
        transitionDuration: '0.3s',
        height: 'auto',
        justifyContent: 'center'
    }
    
    return (
        <div class="showInfo">
            <MapContainer user={user} venues={venues}/>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
            {shows.map((show) => 
            <Card style={cardStyle} variant="outlined">
                <h3>{show.city_name}</h3>
                <h3>{show.date}</h3>
                <h3>Doors: {show.doors_time}</h3>
                <h3>SoundCheck: {show.soundcheck_time}</h3>
                <h3>Set Time: {show.soundcheck_time}</h3>
                {/* <h3>--------------------</h3> */}
            </Card>
            )}
            </Grid>
        </div>
    )
}

export default UsersTour