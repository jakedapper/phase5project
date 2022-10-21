import React, {useState} from 'react';
import MapContainer from "./MapContainer"

function UsersTour({user, venues, tours}) {

    console.log(user.shows)
    let shows = user.shows
    // let cities = tours.cities
    // console.log(shows)
    // console.log(shows.city_name)

    return (
        <div>
            <MapContainer user={user} venues={venues}/>
            {shows.map((show) => 
            <div>
                <h3>{show.city_name}</h3>
                <h3>{show.date}</h3>
                <h3>Doors: {show.doors_time}</h3>
                <h3>SoundCheck: {show.soundcheck_time}</h3>
                <h3>Set Time: {show.soundcheck_time}</h3>
                <h3>--------------------</h3>
            </div>
            )}
        </div>
    )
}

export default UsersTour