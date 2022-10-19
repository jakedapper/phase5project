import React, { useState}  from 'react';
import Calendar from 'react-calendar';

function NewShowForm ({user, setUser, tours, cities}) {
    const [formVenueName, setFormVenueName] = useState("")
    const [formVenueAddress, setFormVenueAddress] = useState("")
    const [formCityName, setFormCityName] = useState("")
    // const [formShowDate, setFormShowDate] = useState("")
    const [formShowDoors, setFormShowDoors] = useState("")
    const [formShowSoundcheck, setFormShowSoundcheck] = useState("")
    const [formShowSetTime, setFormShowSetTime] = useState("")
    const [selectedTour, setSelectedTour] = useState(1)
    const [selectedCity, setSelectedCity] = useState(1)
    const [newCity, setNewCity] =useState("")
    const [newVenue, setNewVenue] = useState("")
    const [newShow, setNewShow] = useState("")
    const [newShowDate, onChange] = useState(new Date());

    console.log(newShowDate)
    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("/cities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formCityName
          }),
        }).then((res) => res.json())
        .then((city)=>setNewCity(city))

        fetch("/venues", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formVenueName,
              address: formVenueAddress,
              city_id: newCity.id
            }),
          }).then((res) => res.json())
          .then((venue)=>setNewVenue(venue))

        fetch("/shows", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: newShowDate,
              doors_time: formShowDoors,
              soundcheck_time: formShowSoundcheck,
              set_time: formShowSetTime,
              city_id: newCity.id,
              tour_id: user.tour.id,
              venue_id: newVenue.id
            }),
          }).then((res) => res.json())
          .then((show)=>setNewShow(show))  
    }


    console.log(newShowDate.toLocaleDateString())

    return(
        <div>
            <p>Add A Show</p>
            {/* <select value={selectedTour} onChange={(e)=>setSelectedTour(e.target.value)}>
                {tours.map((tour)=> <option key={tour.id} value={tour.id}>{tour.user.name}</option>)}
            </select> */}
            <select value={selectedCity} onChange={(e)=>setSelectedTour(e.target.value)}>
                {cities.map((city)=> <option key={city.id} value={city.id}>{city.name}</option>)}
            </select>
            <Calendar onChange={onChange} value={newShowDate}
            />
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