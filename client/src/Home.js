import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Home({}) {

    let history = useHistory();

    function handleReviewsClick(){
        history.push(("/venues"))
    }

    function handleShowsClick() {
        history.push(("/addNewShow"))
    }

    function handleMyTourClick() {
        history.push(("/myTour"))
    }


    return(
        <div>
            <h2>HOME PAGE</h2>
            <button onClick={handleReviewsClick}>Venue Reviews</button>
            <button onClick={handleShowsClick}>Add Show To Tour</button>
            <button onClick={handleMyTourClick}>My Tour</button>
        </div>
    )
}

export default Home