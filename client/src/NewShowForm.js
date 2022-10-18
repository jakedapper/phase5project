import React, { useState}  from 'react';

function NewShowForm ({user, setUser}) {
    const [formVenueName, setFormVenueName] = useState("")
    const [formVenueAddress, setFormVenueAddress] = useState("")
    const [formCityName, setFormCityName] = useState("")
    const [formShowDate, setFormShowDate] = useState("")
    const [formShowDoors, setFormShowDoors] = useState("")
    const [formShowSoundcheck, setFormShowSoundcheck] = useState("")
    const [formShowSetTime, setFormShowSetTime] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        
        // fetch("/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //   }),
        // }).then((res) => res.json())
        
    }

    return(
        <div>
            {/* <p>Add A Show</p>
            <form onSubmit={handleSubmit}>
                <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                 <label></label>
                <input
                    placeholder=""
                    type="text"
                    name=""
                    onChange={(e)=>setForm(e.target.value)}
                    value={}
                />
                <input type="submit"/>
            </form> */}
        </div>
    )
}


export default NewShowForm;