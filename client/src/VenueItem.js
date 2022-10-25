import React, {useState} from 'react';
import VenueReviewForm from './VenueReviewForm'
import Card from '@mui/material/Card'

function VenueItem({venue}) {

    let reviews = venue.reviews

    var cardStyle = {
        
        width: '30vw',
        transitionDuration: '0.3s',
        height: 'auto',
        justifyContent: 'center'
    }
return(
    <div>
        {reviews.length > 0 ? 
        <div>
            <h2 class='venueReviewName'>{venue.name}</h2>
            {reviews.map((review)=>
            <Card style={cardStyle} variant="outlined">
                <h4 class='venueReviewInfo'>Green Room Rating: {review.greenroom_rating}/5</h4>
                <h4 class='venueReviewInfo'>Sound Engineer Rating: {review.sound_engineer_rating}/5</h4>
                <h4 class='venueReviewInfo'>Merch Cut: {review.merch_cut}%</h4>
                <h4 class='venueReviewInfo'>Additional Comments: {review.comments}</h4>
            </Card>
            )}
        </div> :
        <></>
        }
    </div>
    )
}

export default VenueItem