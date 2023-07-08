import React, {useState} from 'react';
import VenueReviewForm from './VenueReviewForm'
import Card from '@mui/material/Card'

function VenueItem({user, venue}) {
const [showEditForm, setShowEditForm] = useState(false)
const [formGreenRoom,setFormGreenRoom] = useState("")
const [formSoundEngineer,setFormSoundEngineer] = useState("")
const [formMerch,setFormMerch] = useState("")
const [formComments,setFormComments] = useState("")

    let reviews = venue.reviews
    console.log(reviews)
    var cardStyle = {
        width: '30vw',
        transitionDuration: '0.3s',
        height: 'auto',
        justifyContent: 'center'
    }

    function toggleEditForm(){
        console.log("clicK")
        setShowEditForm(!showEditForm)
    }

    function updateReview(e){
        
        fetch(`/reviews/${e.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                greenroom_rating: formGreenRoom,
                sound_engineer_rating: formSoundEngineer,
                merch_cut: formMerch,
                comments: formComments,
                venue_id: venue.id,
                user_id: user.id,
            })
        })
        } 

    
    
return(
    <div>
        {reviews.length > 0 ? 
        <div>
            <h2 class='venueReviewName'>{venue.name}</h2>
            {reviews.map((review)=>
            <Card key={review.id} style={cardStyle} variant="outlined">
                <h4 class='venueReviewInfo'>Posted By: {review.user_name.name}</h4>
                <h4 class='venueReviewInfo'>Green Room Rating: {review.greenroom_rating}/5</h4>
                <h4 class='venueReviewInfo'>Sound Engineer Rating: {review.sound_engineer_rating}/5</h4>
                <h4 class='venueReviewInfo'>Merch Cut: {review.merch_cut}%</h4>
                <h4 class='venueReviewInfo'>Additional Comments: {review.comments}</h4>
                {user.id === review.user_id  ? <button onClick={toggleEditForm}>edit</button> : <></>}
                {showEditForm ? 
                <div>
                    <form onSubmit={updateReview}>
                        <input
                            placeholder={review.greenroom_rating}
                            type="text"
                            name=""
                            onChange={(e)=>setFormGreenRoom(e.target.value)}
                            value={formGreenRoom}
                        />
                        <input
                            placeholder={review.sound_engineer_rating}
                            type="text"
                            name=""
                            onChange={(e)=>setFormSoundEngineer(e.target.value)}
                            value={formSoundEngineer}
                        />
                        <input
                            placeholder={review.merch_cut}
                            type="text"
                            name="merch-cut"
                            onChange={(e)=>setFormMerch(e.target.value)}
                            value={formMerch}
                        />
                        <input
                            placeholder={review.comments}
                            type="text"
                            name=""
                            onChange={(e)=>setFormComments(e.target.value)}
                            value={formComments}
                        />
                        <input type="submit"/>
                    </form>
                </div> 
                : <></>}
            </Card>
            )}
        </div> :
        <></>
        }
    </div>
    )
}

export default VenueItem