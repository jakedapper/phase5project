import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link, useHistory } from "react-router-dom";
import './Home.css'

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
        <Container maxWidth="md">
            {/* <h2>HI! WELCOME, {userVar.name}</h2> */}
            <div>
                <h2>Check Out These Venue Reviews</h2>
                <h3>A list of reviews of venues - feel free to submit your own as well!</h3>
                <Button  variant="contained" onClick={handleReviewsClick}>Venue Reviews</Button>
            </div>
            <div>
                <h2>Add Show To Tour!</h2>
                <p></p>
                <Button  variant="contained" onClick={handleShowsClick}>Add Show To Tour</Button>
            </div>
            <div>
                <h2></h2>
                <p></p>
                <Button  variant="contained" onClick={handleMyTourClick}>My Tour</Button>
            </div>
            <div>
                <h2></h2>
                <p></p>
                <Button  variant="contained" onClick={handleRestaurantsClick}>Nearby Retaurants</Button>
            </div>
        </Container>
    )
}

export default Home