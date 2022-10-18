import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Home({}) {

    let history = useHistory();

    function handleClick(){
        history.push(("/venues"))
    }


    return(
        <div>
            <h2>HOME PAGE</h2>
            <button onClick={handleClick}>Venue Reviews</button>
        </div>
    )
}

export default Home