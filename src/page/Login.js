import React from 'react'

// import style
import './style/styleLogin2.css'

//import backend
import axios from 'axios';
import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';

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
                    <div className='styleBox'>
                      <p>Username</p><input type='text' placeholder='Email or Username' onChange={e =>setUsername(e.target.value)} style={{ width: '170px' , height: '20px' }}></input>
                    </div>
                    <div className='styleBox'>
                      <p>Password</p><input type='text' placeholder='Password' onChange={e =>setPassword(e.target.value)} style={{ width: '170px' , height: '20px' }} ></input>
                    </div>
                </div>
                <Link to='/Register' ><p>Register new account</p></Link>
                <button type= 'submit' className='btnLogin'>Login</button>
              </form>
              
          </div>
        </div>
    )
}

export default Login