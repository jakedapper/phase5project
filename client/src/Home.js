import React from 'react';
import Button from '@mui/material/Button';
import { Link, useHistory } from "react-router-dom";

function Home({user}) {

    let history = useHistory();

    function handleReviewsClick(){
        history.push(("/venues"))
    }

    function handleShowsClick() {
        history.push(("/addNewShow"))
    }

    function handleMyTourClick() {
       if (user === null){
        history.push("/")
       }else{
        history.push(("/myTour"))
       }
    }

    function handleRestaurantsClick() {
        history.push("/restaurants")
    }


    return(
        <div>
            <h2>HOME PAGE</h2>
            {/* <h2>HI! WELCOME, {userVar.name}</h2> */}
            <Button variant="contained" onClick={handleReviewsClick}>Venue Reviews</Button>
            <button onClick={handleShowsClick}>Add Show To Tour</button>
            <button onClick={handleMyTourClick}>My Tour</button>
            <button onClick={handleRestaurantsClick}>Nearby Retaurants</button>
        </div>
    )
}

export default Home