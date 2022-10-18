import React, {useState} from 'react';
import VenueReviewForm from './VenueReviewForm'

function VenueItem({venue}) {

    let reviews = venue.reviews

return(
    <div>
        {reviews.length > 0 ? 
        <div>
            <h2>{venue.name}</h2>
            {reviews.map((review)=>
            <div>
                <h4>Green Room Rating: {review.greenroom_rating}/5</h4>
                <h4>Sound Engineer Rating: {review.sound_engineer_rating}/5</h4>
                <h4>Green Room Rating: {review.merch_cut}</h4>
                <h4>Additional Comments: {review.comments}</h4>
            </div>
            )}
        </div> :
        <></>
        }
    </div>
    )
}

export default VenueItem