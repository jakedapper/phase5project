import React, { useState}  from 'react';

function UserSignUp ({user, setUser}) {
    const [formName, setFormName] = useState("")
    const [formRole, setFormRole] = useState("")
    const [formUsername, setFormUsername] = useState("")
    const [formPassword, setFormPassword] = useState("")
    
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formUsername,
            password: formPassword,
            // password_confirmation: passwordConfirmation,
            name: formName,
            role: formRole
          }),
        }).then((res) => res.json())
        .then((data) => setUser(data))
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
                <label>Role</label>
                <input
                    placeholder="Manager or Band?"
                    type="text"
                    name="role"
                    onChange={(e)=>setFormRole(e.target.value)}
                    value={formRole}
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