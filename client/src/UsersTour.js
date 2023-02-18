import React, {useState} from 'react';
import MapContainer from './MapContainer'
import NewShowForm from './NewShowForm'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid';
// import { Link, useHistory } from "react-router-dom";


function UsersTour({editShow, deleteShow, user, venues, updateCities, updateShows, updateVenues, setUpdateUser, }) {
   
    const [toggle, setToggle] = useState(false)

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

    // function deleteShow(e){
    //     let history = useHistory();
    //     console.log(e.target.id)
    //     setToggle(!toggle)
    //     fetch(`/shows/${e.target.id}`, {
    //         method: 'DELETE',
    //     })
    //     .then(fetch('/shows')
    //             .then((res)=>res.json())
    //             .then(data=>setShows(data)))
                
    // }

    // useEffect(()=>{
    //     fetch('/shows')
    //     .then((res)=>res.json())
    //     .then(data=>setShows(data))
    // },[shows])
    // function editShow(e){
    //     fetch(`/shows/${e.target.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             date: date,
    //             doors_time: description,
    //             soundcheck_time: soundcheck,
    //             set_time: setTime,
    //             city_id: imgUrl,
    //             tour_id: ,
    //             venue_id:,
    //             user_id: user.id
    //         })
    //     }) }
    function showEditShowForm(){
        setToggle(!toggle)
    }
    
    return (
        <div id="userTourDiv" class="showInfo">
            <MapContainer user={user} venues={venues}/>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
            {shows.map((show) => 
            <Card id="showCard" style={cardStyle} variant="outlined">
                <h3>{show.city_name}</h3>
                <h3>{show.date}</h3>
                <h3>Doors: {show.doors_time}</h3>
                <h3>SoundCheck: {show.soundcheck_time}</h3>
                <h3>Set Time: {show.soundcheck_time}</h3>
                <button id={show.id} onClick={deleteShow}>Cancel Show</button>
                {/*  */}
                {/* { toggle ? 
                <form>
                    <input>Date</input>
                    <input>Doors Time</input>
                    <input>Sound Check Time</input>
                </form>
                : 
                <></>
                } */}
            </Card>
            )}
            </Grid>
            <NewShowForm id="newShowForm" setUpdateUser={setUpdateUser} user={user} updateCities={updateCities} updateShows={updateShows} updateVenues={updateVenues}/>
        </div>
    )
}

export default UsersTour