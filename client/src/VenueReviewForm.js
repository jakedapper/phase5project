import { React, useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormControl from '@mui/material/FormControl'
import FilledInput from '@mui/material/FilledInput'
import InputLabel from '@mui/material/InputLabel';


function VenueReviewForm ({venues, user, addNewReview}) {
    const [formGreenRoomRating, setFormGreenRoomRating] = useState("")
    const [formSoundEngRating, setFormSoundEngRating] = useState("")
    const [formMerchCut, setFormMerchCut] = useState("")
    const [formComments, setFormComments] = useState("")
    const [selectedVenuee, setSelectedVenue] = useState(1)

    let reviews = user.reviews
    console.log(Array.isArray(reviews))


    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(selectedVenuee)
        console.log(user.id)
    

        

        // const newReview = {
        //     greenroom_rating: formGreenRoomRating,
        //     sound_engineer_rating: formSoundEngRating,
        //     merch_cut: formMerchCut,
        //     comments: formComments,
        //     venue_id: selectedVenue,
        //     user_id: user.id
        // }

        // if(reviews.some(review => review.venue_id !== selectedVenuee.id)){
        
            fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                greenroom_rating: formGreenRoomRating,
                sound_engineer_rating: formSoundEngRating,
                merch_cut: formMerchCut,
                comments: formComments,
                venue_id: selectedVenuee,
                user_id: user.id
                }
            ),
            })
            .then((res) => res.json())
            
            window.location.reload()
        // }else{
        //     alert("You can only leave one review per venue")
        // }
    }

    return (
        <div id="reviewFormDiv">
            <p>Leave a Review</p>
            <select value={selectedVenuee} onChange={(e)=>setSelectedVenue(e.target.value)}>
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