import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Link, useHistory } from "react-router-dom";
import './Home.css'
import background from './images/background.jpg'
import button1 from './images/button1.png'
import button2 from './images/button2.png'
import button3 from './images/button3.png'

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
                <img class="homeButtonImg" id='buttonOne'src={button1} alt='venue-reviews'/>
                <Button  variant="contained" onClick={handleReviewsClick}>Venue Reviews</Button>
                <h3 class='buttonCaptions' id='venueButtonCaption'>A list of reviews of venues - feel free to submit your own as well!</h3>
            </div>
            {/* <div class="homeGridItems">
                <Button  variant="contained" onClick={handleShowsClick}>Add Show To Tour</Button>
                <h3 class='buttonCaptions' >Got another gig?</h3>
            </div> */}
            <div class="homeGridItems">
                <img class="homeButtonImg"id="buttonThree" src={button3} alt='restaurants-button-pic'/>
                <Button  variant="contained" onClick={handleRestaurantsClick}>Nearby Retaurants</Button>
                <h3 class='buttonCaptions' >Need Sustenance?</h3>
            </div>
            <div class="homeGridItems">
                <img class="homeButtonImg" id="buttonTwo" src={button2} alt='My-Tour-button'/>
                <Button  variant="contained" onClick={handleMyTourClick}>My Tour</Button>
                <h3 class='buttonCaptions' >See Your Shows</h3>
            </div>
        </Grid>
    )
}

export default Home