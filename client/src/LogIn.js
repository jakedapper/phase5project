import React, { useState, useEffect } from "react";
import UserSignUp from "./UserSignUp"
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FilledInput from '@mui/material/FilledInput'


function LogIn({ updateTours, user, setUser}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [newUser, setNewUser]   = useState(false)
  const [errors, setErrors] = useState([])


//   let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res=>res.json())
        // .then((res)=>console.log(res))
        .then(res => setUser(res))
        // history.push("/home")
        setUsername("")
        setPassword("")
    }
   
    function handleNewUserClick(){
        if (newUser === false){
            setNewUser(true)
        }else {
            setNewUser(false)
      }
    }

    return (
        <div id="loginDiv">
            <div id="titleForm">
                <h1 id="loginTitle">Log In</h1>
                <form id="loginForm" onSubmit={handleSubmit}>

                    <input 
                        class = "loginFormField"
                        placeholder="Enter username" 
                        type="text" 
                        name="username" 
                        onChange={(e)=>setUsername(e.target.value)} 
                        value={username}
                    />

                    <input 
                        class = "loginFormField"
                        placeholder="Enter Password" 
                        type="text" 
                        name="password" 
                        onChange={(e)=>setPassword(e.target.value)} 
                        value={password}
                    />
                    
                    <input type="submit"/>
                </form> 
            </div>
            <Button id="signupButton" variant="contained" onClick={handleNewUserClick}> New User? Need To Sign-Up?</Button>
            {newUser ? <UserSignUp updateTours={updateTours} user={user} setUser={setUser}/> : <></>}
        </div>
     )

    
}

export default LogIn 