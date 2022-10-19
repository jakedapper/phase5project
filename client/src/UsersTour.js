import React, {useState} from 'react';

function UsersTour({user, tours}) {

    let shows = tours.shows
    let cities = tours.cities
    console.log(shows)

    return (
        <div>
            {shows.map((show) => 
            <div>
                <h3>{shows.city_name}</h3>
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