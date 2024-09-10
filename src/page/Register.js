import React from 'react'
import './style/styleRegister.css'

//import backend
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Register() {
  const navigate = useNavigate();
  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  function handleRegister(event){
    event.preventDefault();
    axios.post('http://localhost:8001/register', {username , email ,password})
    .then(res=> {
      if (res.data === "yes"){
        //console.log(res.data);
        alert("Register Successfull !");
        navigate('/Login');
      } else if (res.data ==='no'){
        //console.log(res.data);
        alert("Register Not Successfull !");
      } else {
        alert("Error");
      }
     
    })
    .catch(err => console.log(err))
    };
  return (
    <div className='big-box'>
      <div className='borderStyle'>
        <h2>Register Account</h2>
        <form className='centeringForm' onSubmit={handleRegister}>
          <div className='formstyle'>
            <label for="">Username</label> <input type='text' onChange={e =>setUsername(e.target.value)}></input>
            <label for="">Email</label><input type='text' onChange={e =>setEmail(e.target.value)}></input>
            <label for="">Password</label><input type='text' onChange={e =>setPassword(e.target.value)}></input>
            <label for="">Confirm Password</label><input type='text' ></input>
          </div>
          <button type= 'submit' className='Registerbtn'>Register</button>
        </form>
      </div>
    </div> 
  )
}

export default Register