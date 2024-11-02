import React, { useState } from 'react'
import '../components/SignUpForm.css'

function SignUpForm() {

 const [users,setUsers] = useState([])
 const [ username,setUsername ] = useState("")
 const [email , setEmail ] = useState("")
 const [contact , setContact ] = useState("")
 const [ password, setPassword ] = useState("")

 function  handleSubmit  (e){

  e.preventDefault();

  users.push({username,email,contact,password})
  setUsers([...users]);
  setUsername("")
  setEmail("")
  setContact("")
  setPassword("")



 }



  return (
    <div className="form-wrapper">
    <form className="signup-form">
      <h1>Sign Up</h1>
      <div className="input-group">
        <input type="text" id="username" name="username" required 
        
        onChange={(e)=>{setUsername(e.target.value)}  }
        
        
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="input-group">
        <input type="email" id="email" name="email" required 
        
        onChange={(e)=>{setEmail(e.target.value)}  }
        
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-group">
        <input type="tel" id="contact" name="contact" required 
        
        onChange={(e)=>{setContact(e.target.value)}  }
        
        
        />
        <label htmlFor="contact">Contact Number</label>
      </div>
      <div className="input-group">
        <input type="password" id="password" name="password" required 
        
        onChange={(e)=>{setPassword(e.target.value)}  }
        
        
        />
        <label htmlFor="password">Password</label>
      </div>
      <button onClick={handleSubmit} type="submit" className="btn">Sign Up</button>
    </form>
      
    <div className="user-list">
        <h2>Registered Users:</h2>
        {users.map((user, index) => (
          <div key={index} className="user-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Contact Number:</strong> {user.contact}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <hr />
          </div>
        ))}
      </div>


  </div>
  )
}

export default SignUpForm
