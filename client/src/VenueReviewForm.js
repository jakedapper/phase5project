import { React, useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function VenueReviewForm ({venues, user}) {
    const [formGreenRoomRating, setFormGreenRoomRating] = useState("")
    const [formSoundEngRating, setFormSoundEngRating] = useState("")
    const [formMerchCut, setFormMerchCut] = useState("")
    const [formComments, setFormComments] = useState("")
    const [selectedVenue, setSelectedVenue] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        
        const newReview = {
            greenroom_rating: formGreenRoomRating,
            sound_engineer_rating: formSoundEngRating,
            merch_cut: formMerchCut,
            comments: formComments,
            venue_id: selectedVenue,
            user_id: user.id
        }

        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({newReview}),
        }).then((res) => res.json())
        
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
                    onChange={(e)=>setFormGreenRoomRating(e.target.value)}
                    value={formGreenRoomRating}
                />
                 <label>Sound Engineer Rating</label>
                <input
                    placeholder="Rating Out of 5"
                    type="text"
                    name="sound_engineer_rating"
                    onChange={(e)=>setFormSoundEngRating(e.target.value)}
                    value={formSoundEngRating}
                />
                 <label>Merch Cut %</label>
                <input
                    placeholder="%?"
                    type="text"
                    name="merch_cut"
                    onChange={(e)=>setFormMerchCut(e.target.value)}
                    value={formMerchCut}
                />
                 <label>Additional Comments</label>
                <input
                    placeholder="What's On Your Mind?"
                    type="text"
                    name="comments"
                    onChange={(e)=>setFormComments(e.target.value)}
                    value={formComments}
                />
                <input type="submit"/>
            </form>

        </div>
    )
}

export default VenueReviewForm;