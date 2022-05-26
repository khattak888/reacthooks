import React, { useState } from 'react'

const Login = () => {
     
      const [username,setUsername] = useState('')
      const [password,setPassword] = useState('')
      const submitForm = (e)=>{
          e.preventDefault()
          console.log(username,password)
      }

  return (
          <div>
        <form onSubmit={submitForm}>
             <h1>Login Form</h1>
        <input type = "text" name="username" placeholder="Username" value = {username} onChange={(e)=>setUsername(e.target.value)}/><br />
        <input type = "password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <input type = "submit" />
        
        

        </form>
        </div>
  )
}

export default Login