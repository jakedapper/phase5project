import { React, useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function VenueReviewForm ({venues}) {
    const [formGreenRoomRating, setFormGreenRoomRating] = useState("")
    const [formSoundEngRating, setFormSoundEngRating] = useState("")
    const [formMerchCut, setFormMerchCut] = useState("")
    const [formComments, setFormComments] = useState("")
    const [selectedVenue, setSelectedVenue] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        
        // fetch("/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //   }),
        // }).then((res) => res.json())
        
    }

    return (
        <div>
            <h3> Hi I'm gonna be a cool form eventually</h3>
            <p>Leave a Review</p>
            <select value={selectedVenue} onChange={(e)=>setSelectedVenue(e.target.value)}>
                {venues.map((venue)=> <option key={venue.id} value={venue.id}>{venue.name}</option>)}
            </select>
            <form onSubmit={handleSubmit}>
                <label>Green Room Rating</label>
                <input
                    placeholder="Rating Out of 5"
                    type="text"
                    name="greenroom_rating"
                    // onChange={(e)=>setGreenRating(e.target.value)}
                    value={formGreenRoomRating}
                />
                 <label>Sound Engineer Rating</label>
                <input
                    placeholder="Rating Out of 5"
                    type="text"
                    name="sound_engineer_rating"
                    // onChange={(e)=>setForm(e.target.value)}
                    value={formSoundEngRating}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    // onChange={(e)=>setForm(e.target.value)}
                    value={formMerchCut}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    // onChange={(e)=>setForm(e.target.value)}
                    value={formComments}
                />
                <input type="submit"/>
            </form>

        </div>
    )
}

export default VenueReviewForm;