import React, { useState}  from 'react';

function UserSignUp ({updateTours,user, setUser}) {
    const [formName, setFormName] = useState("")
    const [formUsername, setFormUsername] = useState("")
    const [formPassword, setFormPassword] = useState("")
    
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

   async function handleSubmit(e) {
        e.preventDefault();
        
       const res = await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formUsername,
            password: formPassword,
            // password_confirmation: passwordConfirmation,
            name: formName,
          }),
        })
        const me = await res.json()
        
        fetch("/tours", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: me.id
            }),
          }).then((res) => res.json())
          .then((newTour) => updateTours(newTour))

        
    }

    return(
        <div>
            <p>signup</p>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={(e)=>setFormName(e.target.value)}
                    value={formName}
                />
                <label>Username</label>
                <input
                    placeholder="Choose a username"
                    type="text"
                    name="username"
                    onChange={(e)=>setFormUsername(e.target.value)}
                    value={formUsername}
                />
                 <label>Password</label>
                <input
                    placeholder="Choose a password"
                    type="text"
                    name="password"
                    onChange={(e)=>setFormPassword(e.target.value)}
                    value={formPassword}
                />

                <input type="submit"/>
            </form>
        </div>
    )
}


export default UserSignUp;