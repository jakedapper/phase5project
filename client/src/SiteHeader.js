import React from 'react';
import LogOut from './LogOut'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';


function SiteHeader({handleLogOut}){

    return(
        <div>
        <LogOut id="logOutButton" handleLogOut={handleLogOut}/>
        <Grid id="gridHeader">
        <Container maxwidth='lg'>
             <h2 id="siteTitle">Virtual Tour Manager 1.0</h2>
            <h3 id="siteSubtitle">Not like replacing the person who has the position of the same name but like a way for you to organize important tour information or whatever.</h3>
        </Container>
        </Grid>
        </div>
    )
}

export default SiteHeader