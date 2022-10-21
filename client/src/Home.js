import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Home({userVar}) {

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

    function handleRestaurantsClick() {
        history.push("/restaurants")
    }


    return(
        <div>
            <h2>HOME PAGE</h2>
            {/* <h2>HI! WELCOME, {userVar.name}</h2> */}
            <button onClick={handleReviewsClick}>Venue Reviews</button>
            <button onClick={handleShowsClick}>Add Show To Tour</button>
            <button onClick={handleMyTourClick}>My Tour</button>
            <button onClick={handleRestaurantsClick}>Nearby Retaurants</button>
        </div>
    )
}

export default Home