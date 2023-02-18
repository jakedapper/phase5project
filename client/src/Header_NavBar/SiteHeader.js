import React from 'react';
import LogOut from '../Users/LogOut'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import NavBar from './NavBar'


function SiteHeader({navToHome, handleLogOut}){

    function handleClick(){
        navToHome()
    }

    return(
        <div id="siteHeader" onClick={handleClick}>
            <LogOut id="logOutButton" handleLogOut={handleLogOut}/>
            <Grid id="gridHeader">
                <Container maxwidth='lg'>
                    <h2 id="siteTitle">Virtual Tour Manager 1.0</h2>
                    <h3 id="siteSubtitle">Not like replacing the person who has the position of the same name but like a way for you to organize important tour information or whatever.</h3>
                </Container>   
                <Container>
                    
                </Container>
            </Grid>
        </div>
    )
}

export default SiteHeader