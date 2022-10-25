import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Link, useHistory } from "react-router-dom";
import './Home.css'
import background from './images/background.jpg'
import button1 from './images/button1.png'
import button from './images/button2.png'

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
        <Grid id="home">
            {/* <h2>HI! WELCOME, {userVar.name}</h2> */}
            <div class="homeGridItems">
                {/* <img src="button1" alt='venue-reviews'/> */}
                <Button  variant="contained" onClick={handleReviewsClick}>Venue Reviews</Button>
                <h3>A list of reviews of venues - feel free to submit your own as well!</h3>
            </div>
            <div class="homeGridItems">
                {/* <img src={button1} alt='My-Tour-button'/> */}
                <Button  variant="contained" onClick={handleShowsClick}>Add Show To Tour</Button>
            </div>
            <div class="homeGridItems">
                <h2></h2>
                <p></p>
                <Button  variant="contained" onClick={handleMyTourClick}>My Tour</Button>
            </div>
            <div class="homeGridItems">
                <h2></h2>
                <p></p>
                <Button  variant="contained" onClick={handleRestaurantsClick}>Nearby Retaurants</Button>
            </div>
        </Grid>
    )
}

export default Home