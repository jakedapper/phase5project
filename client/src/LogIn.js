import React, { useState, useEffect } from "react";

function LogIn({ user, setUser}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

//   let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        .then(res=>res.json())
        // .then((res)=>console.log(res))
        .then(res => setUser(res))
        // history.push("/home")
        setUsername("")
        setPassword("")
    }
   

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>

                <label>User Name</label>
                <input 
                    placeholder="Enter username" 
                    type="text" 
                    name="username" 
                    onChange={(e)=>setUsername(e.target.value)} 
                    value={username}
                />

                <label>Password</label>
                <input 
                    placeholder="Enter Password" 
                    type="text" 
                    name="password" 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password}
                />

                <input type="submit"/>
            </form> 
        </div>
     )

    
}

export default LogIn 