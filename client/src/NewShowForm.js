import React, { useState}  from 'react';
import { useHistory } from "react-router-dom";

import Calendar from 'react-calendar';
import Geocode from "react-geocode";
import CircularProgress from "@mui/material/CircularProgress"

function NewShowForm ({setUpdateUser, user, setUser, tours, cities, updateCities, updateShows, updateVenues}) {
    const [formVenueName, setFormVenueName] = useState("")
    const [formVenueAddress, setFormVenueAddress] = useState("")
    const [formCityName, setFormCityName] = useState("")
    // const [formShowDate, setFormShowDate] = useState("")
    const [formShowDoors, setFormShowDoors] = useState("")
    const [formShowSoundcheck, setFormShowSoundcheck] = useState("")
    const [formShowSetTime, setFormShowSetTime] = useState("")
    const [selectedTour, setSelectedTour] = useState(1)
    const [selectedCity, setSelectedCity] = useState("Chicago")
    const [newCity, setNewCity] =useState("")
    const [newVenue, setNewVenue] = useState("")
    const [newShow, setNewShow] = useState("")
    const [newShowDate, onChange] = useState(new Date());
    const [venueCoordinates, setVenueCoordinates] = useState({})
    
    
    let history = useHistory();
    
    if (user === null){
      return(<CircularProgress />)
    }

    console.log(newShowDate)
    console.log(user.id)

    Geocode.setApiKey("AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY");

      let newCityName = ""
    
      if (formCityName === ""){
         newCityName = selectedCity
      }else{
         newCityName = formCityName
      }
    

     async function handleSubmit(e){
        e.preventDefault();
        
        const res = await fetch("/cities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newCityName
          }),
        })
        const cityy = await res.json()
        updateCities(cityy)

        const res1 = await Geocode.fromAddress(formVenueAddress)
        console.log(res1)
        const coords = res1.results[0].geometry.location
        console.log(coords)

        async function venuePost(city, coords){
         const res = await fetch("/venues", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formVenueName,
            address: formVenueAddress,
            city_id: city.id,
            lat: coords.lat,
            lng: coords.lng
          }),
        })
          const addedVenue = await res.json()
          updateVenues(addedVenue)
          
            console.log(user)

            const showsResult = await fetch("/shows", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                date: newShowDate.toLocaleDateString(),
                doors_time: formShowDoors,
                soundcheck_time: formShowSoundcheck,
                set_time: formShowSetTime,
                city_id: city.id,
                tour_id: user.tours[0].id,
                venue_id: addedVenue.id,
                user_id: user.id
              }),
            })
            const newShow = await showsResult.json()
              updateShows(newShow)
              setUpdateUser()
              history.push("/myTour")
        }
        // history.push("/myTour")
        venuePost(cityy, coords)

    }
    
    return(
        <div>
            <p>Add A Show</p>
            {/* <select value={selectedCity} onChange={(e)=>setSelectedCity(e.target.value)}>
                {cities.map((city)=> <option key={city.id} value={city.name}>{city.name}</option>)}
            </select> */}
            <Calendar onChange={onChange} value={newShowDate}/>
            <form onSubmit={handleSubmit}>
                <label>New City?</label>
               <input
                   placeholder="Name of City"
                   type="text"
                   name="city name"
                   onChange={(e)=>setFormCityName(e.target.value)}
                   value={formCityName}
               />
                <label>Venue Name</label>
                <input
                    placeholder="Venue Name"
                    type="text"
                    name="venue_name"
                    onChange={(e)=>setFormVenueName(e.target.value)}
                    value={formVenueName}
                />
                 <label>Venue Address</label>
                <input
                    placeholder="1234 Main Ave, City, State, Zipcode"
                    type="text"
                    name="Venue Address"
                    onChange={(e)=>setFormVenueAddress(e.target.value)}
                    value={formVenueAddress}
                />
                 {/* <label>Date</label>
                <input
                    placeholder="MM/DD/YY"
                    type="text"
                    name="show_date"
                    onChange={(e)=>setFormShowDate(e.target.value)}
                    value={formShowDate}
                /> */}
                 <label>Doors</label>
                <input
                    placeholder="00:00"
                    type="text"
                    name="doors_time"
                    onChange={(e)=>setFormShowDoors(e.target.value)}
                    value={formShowDoors}
                />
                 <label>Sound Check</label>
                <input
                    placeholder="00:00"
                    type="text"
                    name="sound_check"
                    onChange={(e)=>setFormShowSoundcheck(e.target.value)}
                    value={formShowSoundcheck}
                />
                 <label>Set Time</label>
                <input
                    placeholder="00:00"
                    type="text"
                    name="set_time"
                    onChange={(e)=>setFormShowSetTime(e.target.value)}
                    value={formShowSetTime}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}


export default NewShowForm;