import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style/styleLogin.css";
import axios from 'axios';
import { useState } from 'react';

function LoginPage() {
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
    <div className='box'>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input  type="text" name="input_username" placeholder='Email or Username' onChange={e =>setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="input_password" placeholder='Password' onChange={e =>setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;