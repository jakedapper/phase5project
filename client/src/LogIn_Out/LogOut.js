import React from 'react';
import Button from '@mui/material/Button'

function LogOut({handleLogOut}){


    return(
        <div>
            <Button variant='outlined' size='small' color='error' type="button" onClick={handleLogOut}>Log Out</Button>
        </div>
    )
}

export default LogOut