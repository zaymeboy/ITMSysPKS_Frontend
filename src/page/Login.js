import React from 'react'

// import style
import './style/styleLogin2.css'

//import backend
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    //improvement nanti
  //letak password hasing
  // buat session
  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8001/login', {username , password})
    .then(res=> {
      //console.log(res.data);
      
      if (res.data === "user"){
        navigate('/User');
      }else if (res.data === "staff"){
        navigate('/Staff');
      }else if (res.data === "admin"){
          navigate('/Admin');
      }else{
        alert("Wrong username or password");
      }
    })
    .catch(err => console.log(err))
    };
    return (
        <div className='big-box'>
        <div className='borderStyle'>
            <h2>Login</h2>
            <form className='centeringForm' onSubmit={handleSubmit}>
            <div className='formstyle'>
                <label for="">Username</label><input type='text' placeholder='Email or Username' onChange={e =>setUsername(e.target.value)}></input>
                <label for="">Password</label><input type='text' placeholder='Password' onChange={e =>setPassword(e.target.value)} ></input>
            </div>
            <button type= 'submit' className='Registerbtn'>Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login