import React from 'react';

function LogOut({handleLogOut}){


    return(
        <div>
            <button type="button" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default LogOut